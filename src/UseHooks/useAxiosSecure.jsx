import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UseAuth from "./UseAuth";
 // Assuming you have an AuthContext implementation

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } =UseAuth() // Assuming you have a logOut method in your AuthContext

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/",
  });

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosSecure, logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
