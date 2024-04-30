import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";



const AddSpot = () => {
const {user} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const email =user.email
        const name = user.displayName
       
        
      
        const { tourist_spot_name, country_Name, short_description,average_cost,seasonality ,image, travel_time, totalVisitorsPerYear, location } = data
        const newProduct = {
            email,
            name,
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
        console.log(newProduct);
        fetch('https://tourism-website-server-zeta.vercel.app/card',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then (res => res.json())
        .then (data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Spots Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        
        })
    }
        
    return (
        <div>
              <div className="" >
           

           <div className="p-6  text-neutral-content">

               <div className=" bg-[#21211b] bg-opacity-20 backdrop-blur-base rounded-lg">
                   <h1 className="text-4xl pt-16 font-bold text-center text-[#682018]">Add to Spots</h1>
                   <div className="w-full  p-8 space-y-3 rounded-x">
                       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                           <div className="w-full text-lg">
                               <label htmlFor="country_Name" className="block text-[#682018]">country_Name</label>
                               <select name="country_Name" id="country_Name" className="w-full text-black px-4 py-3 rounded-md" {...register("country_Name", { required: true })}>
                                   {/* <option value="">Select Subcategory</option> */}
                                   <option value="Uzbekistan">Uzbekistan</option>
                                   <option value="Kyrgyzstan">Kyrgyzstan</option>
                                   <option value="Kazakhstan">Kazakhstan</option>
                                   <option value="Tajikistan">Tajikistan</option>
                        
                                   <option value="Turkmenistan">Turkmenistan</option>
                                   <option value="Mongolia">Mongolia</option>
                               </select>
                               {errors.country_Name && <span className='text-red-600 font-bold'>!!!country_Name is required!!!</span>}

                           </div>
                           <div className="lg:flex gap-5 w-full">
                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="image" className="block text-[#682018]">Image Url</label>
                                   <input type="image_url" name="image" id="image" placeholder="image_Url" className="w-full text-black px-4 py-3 rounded-md "
                                       {...register("image", { required: true })} />
                                   {errors.image && <span className='text-red-600 font-bold'>!!!Image is required!!!</span>}
                               </div>
                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="tourist_spot_name" className="block text-[#682018]">Tourist_spot_name</label>
                                   <input name="tourist_spot_name" id="tourist_spot_name" placeholder="tourist_spot_name" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("tourist_spot_name", { required: true })} />
                                   {errors.tourist_spot_name && <span className='text-red-600 font-bold'>!!!tourist_spot_name is required!!!</span>}
                               </div>
                           </div>
                           <div className="lg:flex gap-5 w-full">
                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="location" className="block text-[#682018]">Location</label>
                                   <input name="location" id="location" placeholder="location" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("location", { required: true })} />
                                   {errors.location && <span className='text-red-600 font-bold'>!!!Location is required!!!</span>}
                               </div>

                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="short_description" className="block text-[#682018]">Short_description</label>
                                   <input name="short_description" id="short_description" placeholder="short_description" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("short_description", { required: true })} />
                                   {errors.short_description && <span className='text-red-600 font-bold'>!!!short_description is required!!!</span>}
                               </div>
                           </div>
                           <div className="lg:flex gap-5 w-full">
                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="average_cost" className="block text-[#682018]">Average_cost</label>
                                   <input type="average_cost" name="average_cost" id="average_cost" placeholder="average_cost" className="w-full text-black px-4 py-3 rounded-md "
                                       {...register("average_cost", { required: true })} />
                                   {errors.average_cost && <span className='text-red-600 font-bold'>!!!Average_cost is required!!!</span>}
                               </div>
                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="seasonality" className="block text-[#682018]">seasonality</label>
                                   <input name="seasonality" id="seasonality" placeholder="seasonality" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("seasonality", { required: true })} />
                                   {errors.seasonality && <span className='text-red-600 font-bold'>!!!seasonality is required!!!</span>}
                               </div>
                           </div>
                           <div className="lg:flex gap-5 w-full">
                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="travel_time" className="block text-[#682018]">travel_time</label>
                                   <select
                                       id="travel_time"
                                       className="w-full text-black px-4 py-3 rounded-md"
                                       {...register("travel_time", { required: true })}
                                   >
                                      
                                       <option value="2-3 days">2-3 days</option>
                                       <option value="4-5 days">4-5 days</option>
                                       <option value=" 6-7days">6-7 days</option>
                                       <option value="  or-more">or-more</option>
                                       
                                   </select>
                                   {errors.travel_time && <span className='text-red-600 font-bold'>!!!Please select an option!!!</span>}
                               </div>

                               <div className="text-lg lg:w-[50%]">
                                   <label htmlFor="totalVisitorsPerYear" className="block text-[#682018]">total Visitors Per Year</label>
                                   <input name="totalVisitorsPerYear" id="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("totalVisitorsPerYear", { required: true })} />
                                   {errors.totalVisitorsPerYear && <span className='text-red-600 font-bold'>!!!totalVisitorsPerYear is required!!!</span>}
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

export default AddSpot;