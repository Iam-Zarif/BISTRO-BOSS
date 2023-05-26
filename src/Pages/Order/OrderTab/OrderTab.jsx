/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css";


// import required modules
import { Pagination } from "swiper";


const OrderTab = ({items}) => {
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };
    
    return (

        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}</div>
          </SwiperSlide>
        </Swiper>
      
    );
};

export default OrderTab;