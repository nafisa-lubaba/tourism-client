import { useLoaderData, useParams } from "react-router-dom";


const CardInfo = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    // const idInt = parseInt(_id)
    const card = cards.find(card => card._id === id)
    console.log(card)
    return (
        <div className='mx-auto w-[90%] gap-5'>


            <title>PropHaven | CardInfo</title>


            <div className="">
                <div className=" card bg-[#434336] bg-opacity-20 backdrop-blur-base rounded-lg text-[#682018] data-aos='fade-right"></div>

                <div data-aos="zoom-in-right" className="hero-content gap-10  flex flex-col lg:flex-row lg:justify-center
                card bg-[#434336] bg-opacity-20 backdrop-blur-base rounded-lg text-[#682018] data-aos='fade-right">
                    <img src={card.image} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className=" text-3xl font-bold lg:text-5xl lg:font-bold text-[#682018]">{card.country_Name}</h1>
                        <p className='font-bold text-2xl px-3 text-[#682018] mt-3'>   {card.tourist_spot_name}</p>
                        <hr className='border-dotted' />
                        {/* <p className="py-6">{cart.estate_title}</p> */}
                        <p className="py-3"><span className='font-bold text-[#682018]'>Description:</span>{card.short_description}</p>



                        <hr className='border-dotted my-2' />
                        <div className='mb-3'>
                            <p className='font-bold'>Location:  <span className='font-semibold ml-3'>  {card.location}</span></p>

                            <p className='font-bold'>Average cost:   <span className='font-semibold ml-3'>{card.average_cost}</span></p>
                            <p className='font-bold'>Seasonality:   <span className='font-semibold ml-3'>{card.seasonality}</span></p>
                            <p className='font-bold'>Travel time:   <span className='font-semibold ml-3'>{card.travel_time}</span></p>
                            <p className='font-bold'>Total  Visitors Per Year:   <span className='font-semibold ml-3'>{card.totalVisitorsPerYear}</span></p>

                        </div>
                        {/* <p className='font-bold text-xl'>Facilities:</p>


                        {

                            cart.facilities.map((facilities, idx) => (
                                <li className='ml-5 text-black' key={idx}>{facilities}</li>
                            ))}
                        <p className='font-bold mt-2'>Status:  <span className='font-semibold ml-3 text-orange-500'> {cart.status}</span></p> */}


                    </div>
                </div>
            </div>


        </div>
    );
};

export default CardInfo;