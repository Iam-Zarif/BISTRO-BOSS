import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
  return (
    <div className="my-20 featuredImg bg-fixed">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="bg-black bg-opacity-60 flex flex-col lg:flex-row gap-10 lg:gap-20  p-28 ">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p className=" font-semibold">March 20, 2023</p>
          <p className=" font-semibold">WHERE CAN I GET SOME?</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-5">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
