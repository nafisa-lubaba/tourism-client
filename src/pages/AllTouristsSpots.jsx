import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllTouristsSpots = () => {
  const [card, setCard] = useState([])
  const[displayCard, setDisplayCard]=useState([])
  const handlePriceSort = sortOrder => {
    const sortedItems = [...displayCard].sort((a, b) => {
      const priceA = a.average_cost.toLowerCase();
      const priceB = b.average_cost.toLowerCase();
      if (sortOrder === 'asc') {
        return priceA.localeCompare(priceB);
      } else if (sortOrder === 'desc') {
        return priceB.localeCompare(priceA);
      }
      return 0;
    });
    setDisplayCard(sortedItems);
  }
  useEffect(() => {
    fetch('https://tourism-website-server-zeta.vercel.app/card')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCard(data);
        setDisplayCard(data)
        // setDisplayItems(data)
      });
  }, []);


  return (
    <div className="mx-auto">
      <h2>card:{card.length}</h2>
      <div className=" text-lg text-center mb-5">
        <details className="dropdown">
          <summary className="m-1 btn">Avarage cost Categories</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handlePriceSort('asc')}><a>Low to High</a></li>
            <li onClick={() => handlePriceSort('desc')}><a>High to Low</a></li>
          </ul>
        </details>
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full">
        {
          displayCard.map(cards => (
            <div key={cards._id} className='card bg-[#434336] bg-opacity-20 backdrop-blur-base rounded-lg text-[#682018]' data-aos='fade-right'>
              <figure className=''>
                <img className='rounded-xl px-5 pt-5' src={cards.image} alt={`image for the tourist_spot_name
${cards.tourist_spot_name}`} />
              </figure>
              <div className='card-body' data-aos='fade-left'>
                <h1 className=" text-3xl font-bold lg:text-xl lg:font-bold">{cards.country_Name}</h1>


                <div className='mb-3'>
                  <p className=''>Spot Name:  <span className='font-semibold ml-3'> {cards.tourist_spot_name}</span></p>
                  <p className=''>Location:  <span className='font-semibold ml-3'> {cards.location}</span></p>
                  <p className=''>Description:  <span className='font-semibold ml-3'>  {cards.short_description}</span></p>

                  <p className=''>Travel Time:  <span className='font-semibold ml-3'>{cards.travel_time}</span></p>
                  <p className=''>Travel Time:  <span className='font-semibold ml-3'>{cards.average_cost}</span></p>

                </div>


                <hr className='border-dotted my-2' />

                <div className='flex justify-between mb-3'>
                  <Link
                   to={`/card/${cards._id}`}
                    className='w-full btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]'>View more</Link>

                </div>


              </div>
            </div>

          ))}

      </div>
    </div>
  );
};

export default AllTouristsSpots;