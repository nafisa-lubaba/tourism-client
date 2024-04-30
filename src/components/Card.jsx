import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Card = ({ card }) => {
    useEffect(() => {
        Aos.init();

    }, [])
    const { _id, tourist_spot_name, country_Name, short_description, seasonality, image, travel_time, average_cost, totalVisitorsPerYear, location } = card
    return (
        <div>
            <div className="">
                <div className='card bg-[#434336] bg-opacity-20 backdrop-blur-base rounded-lg text-[#682018]' data-aos='fade-right'>

                    <figure className=''>
                        <img className='rounded-xl px-5 pt-5' src={image} alt={`image for the tourist_spot_name
${tourist_spot_name}`} />
                    </figure>
                    <div className='card-body' data-aos='fade-left'>
                        <h1 className=" text-3xl font-bold lg:text-xl lg:font-bold">{country_Name}</h1>


                        <div className='mb-3'>
                            <p className=''>Spot Name:  <span className='font-semibold ml-3'> {tourist_spot_name}</span></p>
                            <p className=''>Location:  <span className='font-semibold ml-3'> {location}</span></p>
                        

                            <p className=''>Travel Time:  <span className='font-semibold ml-3'>{travel_time}</span></p>
                            <p className=''>Average Cost <span className='font-semibold ml-3'>{average_cost}</span></p>

                        </div>


                        <hr className='border-dotted my-2' />

                        <div className='flex justify-between mb-3'>
                            {/* <Link to={`/cart/${id}`}
                                className="btn bg-black text-white">

                                View Property</Link> */}
                            <Link to={`/card/${_id}`}
                                className='w-full btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]'>View more</Link>

                        </div>


                    </div>


                </div>


            </div>

        </div>
    );
};

export default Card;