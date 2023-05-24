/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseHooks from "../../../UseHooks/UseHooks";

const PopularMenu = () => {
  const [menu] = UseHooks()
  const popular = menu.filter(item => item.category === 'popular')
//    const[menu, setMenu] = useState([]);
//    useEffect(() =>{
// fetch('menu.json')
// .then(res => res.json())
// .then(data =>{ 
//     const popularItems = data.filter(item => item.category === 'popular')
//     setMenu(popularItems)

// })
//    },[])
    return (
      <>
        <section className="mt-20">
          <SectionTitle
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
          ></SectionTitle>
          <div className="my-20 grid grid-cols-1 lg:grid-cols-2 mx-10 lg:mx-0 gap-x-32 gap-y-20">
            {popular.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
        </section>
      </>
    );
};

export default PopularMenu;