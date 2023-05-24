import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import PopularMenu from "../popularMenu/popularMenu";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
<Helmet>
    <title>BISTRO BOSS</title>
</Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;