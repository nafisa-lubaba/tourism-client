

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// import Swal from "sweetalert2";

const UpdatedSpot = () => {
    const data = useLoaderData()
    console.log(data);
    const { _id, tourist_spot_name, country_Name, short_description, average_cost, seasonality, image, travel_time , totalVisitorsPerYear, location } = data
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const country_Name = form.country_Name.value;
        const tourist_spot_name = form.tourist_spot_name.value;
        const image = form.image.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const newSpot = {

            tourist_spot_name,
            country_Name,
            location,
            short_description,
            average_cost,
            seasonality,
            image,
            travel_time,
            totalVisitorsPerYear,

        }
        console.log(newSpot);
        fetch(`https://tourism-website-server-zeta.vercel.app/card/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: ' Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>

            <div className="min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="p-6  text-neutral-content">

                    <div className=" bg-[#21211b] bg-opacity-20 backdrop-blur-base rounded-lg">
                        <h1 className="text-4xl pt-16 font-bold text-center text-[#682018]">Update The Spot</h1>
                        <div className="w-full  p-8 space-y-3 rounded-x">
                            <form onSubmit={handleUpdate} className="space-y-6">
                                <div className="w-full text-lg">
                                    <label htmlFor="country_Name" className="block text-[#682018]">Country_Name</label>
                                    <select name="country_Name" defaultValue={country_Name} id="country_Name" className="w-full text-black px-4 py-3 rounded-md" required>
                                        {/* <option value="">Select Subcategory</option> */}
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Tajikistan">Tajikistan</option>

                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Mongolia">Mongolia</option>
                                    </select>

                                </div>
                                <div className="lg:flex gap-5 w-full">
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="image" className="block text-[#682018]">Image Url</label>
                                        <input type="image_url" name="image" id="image" placeholder="image" defaultValue={image} className="w-full text-black px-4 py-3 rounded-md" required />

                                    </div>
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="tourist_spot_name" className="block text-[#682018]">Tourist_spot_name</label>
                                        <input name="tourist_spot_name" id="tourist_spot_name" placeholder="tourist_spot_name" defaultValue={tourist_spot_name} className="text-black w-full px-4 py-3 rounded-md" required />
                                    </div>
                                </div>
                                <div className="lg:flex gap-5 w-full">
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="location" className="block text-[#682018]">Location</label>
                                        <input name="location" id="location" placeholder="location" defaultValue={location} className="text-black w-full px-4 py-3 rounded-md" required />
                                    </div>
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="short_description" className="block text-[#682018]">Short Description</label>
                                        <input name="short_description" id="short_description" placeholder="short_description" defaultValue={short_description} className="text-black w-full px-4 py-3 rounded-md" required />
                                    </div>
                                </div>
                                <div className="lg:flex gap-5 w-full">
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="seasonality" className="block text-[#682018]">Seasonality</label>
                                        <input type="seasonality" name="seasonality" id="seasonality" placeholder="seasonality" defaultValue={seasonality} className="w-full text-black px-4 py-3 rounded-md" required />
                                    </div>
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="travel_time " className="block text-[#682018]">Travel_time </label>
                                        <select
                                            id="travel_time "
                                            name="travel_time"
                                            className="w-full text-black px-4 py-3 rounded-md"
                                           required >
                                       
                                            <option value="2-3 days">2-3 days</option>
                                            <option value="4-5 days">4-5 days</option>
                                            <option value=" 6-7days">6-7 days</option>
                                            <option value="  or-more">or-more</option>

                                        </select>

                                    </div>
                                </div>
                                
                          
                                <div className="lg:flex gap-5 w-full">
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="average_cost" className="block text-[#682018]">Average_cost</label>
                                        <input
                                            id="average_cost"
                                            name="average_cost"
                                            defaultValue={average_cost}
                                            className="w-full text-black px-4 py-3 rounded-md"
                                            required
                                        >
                                            
                                        </input>
                                    </div>
                                    <div className="text-lg lg:w-[50%]">
                                        <label htmlFor="totalVisitorsPerYear" className="block text-[#682018]">total Visitors Per Year</label>
                                        <input name="totalVisitorsPerYear" id="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} className="text-black w-full px-4 py-3 rounded-md" required />
                                    </div>
                                </div>
                                <div className='text-center w-full'>
                                <button className='w-full btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]'>Submit</button>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdatedSpot;