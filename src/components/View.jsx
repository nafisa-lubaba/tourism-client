import { Link } from "react-router-dom";

const View = ({ card }) => {
    const { _id, tourist_spot_name, country_Name, short_description, seasonality, image, travel_time, totalVisitorsPerYear, location } = card
    return (
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
                        <p className=''>Description:  <span className='font-semibold ml-3'>  {short_description}</span></p>

                        <p className=''>Travel Time:  <span className='font-semibold ml-3'>{travel_time}</span></p>

                    </div>


                    <hr className='border-dotted my-2' />

                    <div className='flex justify-between mb-3'>
                     <Link to={`/card/${_id}`}
                        className='w-full btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]'>View more</Link>

                    </div>


                </div>


            </div>


        </div>


    );
};

export default View;



// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const View = () => {
  
//   const [cards, setCards] = useState([]);
//   const [sortBy, setSortBy] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, [sortBy]); // Fetch data whenever sortBy changes

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`/card${sortBy ? `?sortBy=${sortBy}` : ''}`);
//       const data = await response.json();
//       setCards(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   return (
//     <div>
//       {/* Dropdown menu for sorting */}
//       <select onChange={handleSortChange} value={sortBy} className="my-3">
//         <option value="">Sort by Average Cost</option>
//         <option value="asc">Lowest to Highest</option>
//         <option value="desc">Highest to Lowest</option>
//       </select>

//       {/* Display sorted cards */}
//       {cards.map((card) => (
//         <div className="" key={card._id}>
//           {/* Your card component structure goes here */}
//           <div className='card bg-[#434336] bg-opacity-20 backdrop-blur-base rounded-lg text-[#682018]' data-aos='fade-right'>
//             <figure className=''>
//               <img className='rounded-xl px-5 pt-5' src={card.ima} alt={`image for the tourist_spot_name ${card.tourist_spot_name}`} />
//             </figure>
//             <div className='card-body' data-aos='fade-left'>
//               <h1 className="text-3xl font-bold lg:text-xl lg:font-bold">{card.country_Name}</h1>
//               <div className='mb-3'>
//                 <p className=''>Spot Name:  <span className='font-semibold ml-3'> {card.tourist_spot_name}</span></p>
//                 <p className=''>Location:  <span className='font-semibold ml-3'> {card.location}</span></p>
//                 <p className=''>Description:  <span className='font-semibold ml-3'>  {card.short_description}</span></p>
//                 <p className=''>Travel Time:  <span className='font-semibold ml-3'>{card.travel_time}</span></p>
//               </div>
//               <hr className='border-dotted my-2' />
//               <div className='flex justify-between mb-3'>
//                 <Link to={`/card/${card._id}`} className='w-full btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]'>View more</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default View;

