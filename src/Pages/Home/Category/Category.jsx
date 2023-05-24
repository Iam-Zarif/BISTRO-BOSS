import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section className="mt-20 text-center">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper autoplay
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-2xl lg:text-4xl text-center -mt-14 text-black font-semibold ">
            SALAD
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-2xl lg:text-4xl text-center -mt-14 text-white font-semibold ">
            PIZZA
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-2xl lg:text-4xl text-center -mt-14 text-black font-semibold ">
            SOUP
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-2xl lg:text-4xl text-center -mt-14 text-black font-semibold ">
            CAKE
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-2xl lg:text-4xl text-center -mt-14 text-black font-semibold ">
            SALAD
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
