

import Slider from "../components/Slider";
import Cards from "../components/Cards";
import CountryCate from "../components/CountryCate";
import Food from "./Food";
import Faq from "./Faq";





const Home = () => {
   
    return (
        <div className="overflow-x-hidden">
            <Slider></Slider>
            <Cards></Cards>
            <CountryCate></CountryCate>
            <Food></Food>
           
            <Faq></Faq>
        </div>


    );
};

export default Home;