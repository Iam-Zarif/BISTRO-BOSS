/* eslint-disable no-unused-vars */
import { FaTrashAlt } from "react-icons/fa";
import Title from "../../../Title/Title";
import useCart from "../../../UseHooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
     const [, cart, refetch] = useCart();
    const handleDelete =(item) =>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
}).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire("Deleted!", "Your file has been deleted.", "success");
    fetch(`http://localhost:5000/carts/${item._id}`,{
        method:"DELETE",

    }).then(res => res.json()).then(data =>{
        if(data.deletedCount>0){
            refetch();
Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
    })
  }
});
    }
  Title("BISTRO | MY CART");
 
  const total = cart.reduce((sum, item) => item.price +sum, 0)
  return (
    <div className="w-full">
      <div className="uppercase flex justify-around font-bold text-xl items-center">
        <h1>Total Items : {cart.length}</h1>
        <h1>Total Price : ${total}</h1>
        <button className="btn">PAY</button>
      </div>
      <div className="mt-8">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item,index) => (
                <tr key={item._id} className="">
                  <td>
                   {index+1}
                  </td>
                  <td>
              
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                     
                    
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <button className="btn" onClick={() => handleDelete(item)}><FaTrashAlt/></button>
                  </td>
                </tr>
              ))}
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
