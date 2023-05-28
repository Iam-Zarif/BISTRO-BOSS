/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../UseHooks/useCart";

const FoodCard = ({ item }) => {
  const [refetch] = useCart()
   const { price, category, image, recipe, name, _id } = item;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
const cartItem = {menuItemId  : _id,name,image,price,email : user.email}
      fetch("http://localhost:5000/carts",{
        method: "POST",
        headers : {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch()
            Swal.fire("Successfully Added");
          } else {
            Swal.fire({
              title: "You have to login first",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, LOGIN!",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/login", { state: { from: location } });
              }
            });
          }
        });
    } else {
      Swal.fire({
        title: "You have to login first",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LOGIN!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
  };

 
  return (
    <div className="mt-20 mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 border p-2 rounded-lg">{price}</p>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 mt-5"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
