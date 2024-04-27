import { useForm } from "react-hook-form";


const AddSpot = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        
      
        const { tourist_spot_name, Subcategory_name, short_description,seasonality ,image, travel_time, password, totalVisitorsPerYear, subcategory_name } = data
        const newProduct = {
            tourist_spot_name,
            Subcategory_name,
            location,
            
            short_description,
            seasonality,
            image,
            travel_time,
            password,
            totalVisitorsPerYear,
            subcategory_name
        }
        console.log(newProduct);
    }
    return (
        <div>
              <div className="" >
           

           <div className="p-6  text-neutral-content">

               <div className=" bg-[#edc5bf] bg-opacity-20 backdrop-blur-base rounded-lg">
                   <h1 className="text-4xl pt-16 font-bold text-center text-[#a86a60]">Add to Card</h1>
                   <div className="w-full  p-8 space-y-3 rounded-x">
                       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                           <div className="w-full text-lg">
                               <label htmlFor="subcategory_name" className="block text-[#a86a60]">Subcategory_name</label>
                               <select name="subcategory_name" id="subcategory_name" className="w-full text-black px-4 py-3 rounded-md" {...register("subcategory_name", { required: true })}>
                                   {/* <option value="">Select Subcategory</option> */}
                                   <option value="Uzbekistan">Uzbekistan</option>
                                   <option value="Kyrgyzstan">Kyrgyzstan</option>
                                   <option value="Kazakhstan">Kazakhstan</option>
                                   <option value="Tajikistan">Tajikistan</option>
                        
                                   <option value="Turkmenistan">Turkmenistan</option>
                               </select>
                               {errors.subcategory_name && <span className='text-red-600 font-bold'>!!!Subcategory_name is required!!!</span>}

                           </div>
                           <div className="flex gap-5 w-full">
                               <div className="text-lg w-[50%]">
                                   <label htmlFor="image" className="block text-[#a86a60]">Image Url</label>
                                   <input type="image_url" name="image" id="image" placeholder="image_Url" className="w-full text-black px-4 py-3 rounded-md "
                                       {...register("image", { required: true })} />
                                   {errors.image && <span className='text-red-600 font-bold'>!!!Image is required!!!</span>}
                               </div>
                               <div className="text-lg w-[50%]">
                                   <label htmlFor="tourist_spot_name" className="block text-[#a86a60]">tourist_spot_name</label>
                                   <input name="tourist_spot_name" id="tourist_spot_name" placeholder="tourist_spot_name" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("tourist_spot_name", { required: true })} />
                                   {errors.tourist_spot_name && <span className='text-red-600 font-bold'>!!!tourist_spot_name is required!!!</span>}
                               </div>
                           </div>
                           <div className="flex gap-5 w-full">
                               <div className="text-lg w-[50%]">
                                   <label htmlFor="location" className="block text-[#a86a60]">Location</label>
                                   <input name="location" id="location" placeholder="location" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("location", { required: true })} />
                                   {errors.location && <span className='text-red-600 font-bold'>!!!Location is required!!!</span>}
                               </div>

                               <div className="text-lg w-[50%]">
                                   <label htmlFor="description" className="block text-[#a86a60]">Short Description</label>
                                   <input name="description" id="description" placeholder="description" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("description", { required: true })} />
                                   {errors.description && <span className='text-red-600 font-bold'>!!!description is required!!!</span>}
                               </div>
                           </div>
                           <div className="flex gap-5 w-full">
                               <div className="text-lg w-[50%]">
                                   <label htmlFor="average_cost" className="block text-[#a86a60]">Average_cost</label>
                                   <input type="average_cost" name="average_cost" id="average_cost" placeholder="average_cost" className="w-full text-black px-4 py-3 rounded-md "
                                       {...register("average_cost", { required: true })} />
                                   {errors.average_cost && <span className='text-red-600 font-bold'>!!!Average_cost is required!!!</span>}
                               </div>
                               <div className="text-lg w-[50%]">
                                   <label htmlFor="seasonality" className="block text-[#a86a60]">seasonality</label>
                                   <input name="seasonality" id="seasonality" placeholder="seasonality" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("seasonality", { required: true })} />
                                   {errors.seasonality && <span className='text-red-600 font-bold'>!!!seasonality is required!!!</span>}
                               </div>
                           </div>
                           <div className="flex gap-5 w-full">
                               <div className="text-lg w-[50%]">
                                   <label htmlFor="travel_time" className="block text-[#a86a60]">travel_time</label>
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

                               <div className="text-lg w-[50%]">
                                   <label htmlFor="totalVisitorsPerYear" className="block text-[#a86a60]">total Visitors Per Year</label>
                                   <input name="totalVisitorsPerYear" id="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" className="text-black w-full px-4 py-3 rounded-md "
                                       {...register("totalVisitorsPerYear", { required: true })} />
                                   {errors.totalVisitorsPerYear && <span className='text-red-600 font-bold'>!!!totalVisitorsPerYear is required!!!</span>}
                               </div>
                           </div>

                           <div className='text-center w-full'>
                               <button className='w-full btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]'>Submit</button>
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