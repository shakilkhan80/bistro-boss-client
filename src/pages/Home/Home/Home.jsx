import { Helmet } from "react-helmet-async";
import BistroTitle from "../../BistroTitle/BistroTitle";
import ContactUs from "../../ContactUs/ContactUs";
import Featured from "../../Featured/Featured";
import Recommendes from "../../Recommendes/Recommendes";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Bisto || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <div className="sm:hidden">
                <BistroTitle></BistroTitle>
            </div>
            <PopularMenu></PopularMenu>
            <div className="sm:hidden">
                <ContactUs></ContactUs>
            </div>
            <Recommendes></Recommendes>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;