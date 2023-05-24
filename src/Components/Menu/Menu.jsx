/* eslint-disable no-unused-vars */
import { Helmet} from "react-helmet-async";
import Cover from "../../Pages/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import UseHooks from "../../UseHooks/UseHooks";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import img from './../../assets/menu/dessert-bg.jpeg'
import Pizza from './../../assets/menu/pizza-bg.jpg'
import Salad from './../../assets/menu/salad-bg.jpg'
import Soup from './../../assets/menu/soup-bg.jpg'

const Menu = () => {

  const [menu] = UseHooks();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover menuImg={menuImg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory items={offered}> </MenuCategory>
      <MenuCategory items={dessert} title="Dessert" img={img}> </MenuCategory>
      <MenuCategory items={pizza} title="PIZZA"  img={Pizza}></MenuCategory>
      <MenuCategory items={salad} title="SALAD" img={Salad}></MenuCategory>
      <MenuCategory items={soup} title="SOUP" img={Soup}></MenuCategory>
    </div>
  );
};

export default Menu;
