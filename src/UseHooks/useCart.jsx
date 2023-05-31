import  { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user,loading } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');
const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure(
        `/carts?email=${user.email}`,{
          headers:{
            authorization : `bearer ${token}`
          }
        }
      );
      return response.data;
    },
  });
  return [refetch, cart];
};

export default useCart;
