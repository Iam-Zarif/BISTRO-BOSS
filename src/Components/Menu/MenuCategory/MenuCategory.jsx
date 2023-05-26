/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Cover from "../../../Pages/Shared/Cover/Cover";
import MenuItem from "../../../Pages/Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
      <div>
        {title && <Cover menuImg={img} title={title}></Cover>}

        <div className="my-20 grid grid-cols-1 lg:grid-cols-2 mx-10 lg:mx-0 gap-x-32 gap-y-20">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link className="flex justify-center my-8" to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-5 ">
            Order Now
          </button>
        </Link>
      </div>
    );
};

export default MenuCategory;