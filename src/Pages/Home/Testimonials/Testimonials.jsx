/* eslint-disable no-unused-vars */
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { useEffect, useState } from "react";
const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <div className="my-10 lg:my-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div>
            {review.map((Review) => (
              <SwiperSlide key={Review._id}>
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={Review.rating}
                    readOnly
                  />
                </div>
                <div className="text-center px-36 py-10">
                  <p>{Review.details}</p>
                  <p className="text-3xl mt-5">{Review.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
