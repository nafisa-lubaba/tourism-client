

import Slider from "../components/Slider";
import Cards from "../components/Cards";
import CountryCate from "../components/CountryCate";
import Food from "./Food";
import Faq from "./Faq";
import { ToastContainer } from 'react-toastify';





const Home = () => {
   
    return (
        <div className="overflow-x-hidden">
            <Slider></Slider>
            <Cards></Cards>
            <CountryCate></CountryCate>
            <Food></Food>
           
            <Faq></Faq>
            <ToastContainer/>

        </div>
        


    );
};

export default Home;