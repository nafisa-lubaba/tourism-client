import { Link } from "react-router-dom";


const ShowSubCard = ({ cart }) => {
    const { _id, tourist_spot_name, country_Name, short_description, seasonality, image, travel_time, totalVisitorsPerYear, location, average_cost } = cart
    return (
       
            
                <div className="">
                    <div className='card bg-[#434336] bg-opacity-20 backdrop-blur-base rounded-lg text-[#682018] max-h-max' data-aos=''>

                        <figure className=''>
                            <img className='rounded-xl px-5 pt-5' data-aos='' src={image} alt={`image for the tourist_spot_name
${tourist_spot_name}`} />
                        </figure>
                        <div className='card-body'>
                            <h1 className=" text-3xl font-bold lg:text-xl lg:font-bold">{country_Name}</h1>


                            <div className='mb-3'>
                                <p className=''>Spot Name:  <span className='font-semibold ml-3'> {tourist_spot_name}</span></p>
                                <p className=''>Location:  <span className='font-semibold ml-3'> {location}</span></p>
                                <p className=''>Description:  <span className='font-semibold ml-3'>  {short_description}</span></p>

                                <p className=''>Average cost:  <span className='font-semibold ml-3'>{average_cost}</span></p>
                                <p className=''>Seasonality:  <span className='font-semibold ml-3'>{seasonality}</span></p>

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

         

    );
};

export default ShowSubCard;