/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

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
      </div>
    );
};

export default MenuCategory;