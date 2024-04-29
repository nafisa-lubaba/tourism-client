

import Slider from "../components/Slider";
import Cards from "../components/Cards";
import CountryCate from "../components/CountryCate";
import Food from "./Food";
import Foods from "./Foods";




const Home = () => {
   
    return (
        <div>
            <Slider></Slider>
            <Cards></Cards>
            <CountryCate></CountryCate>
            <Food></Food>
            <Foods></Foods>
        </div>


    );
};

export default Home;