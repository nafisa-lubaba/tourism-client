import { useEffect, useState } from "react";
import SubCate from "./SubCate";


const CountryCate = () => {
    const [categorys, setCategory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCategory(data)
        })
    },[])
    // console.log(category[0].country_Name)
    
    return (
        <div>
           
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-8 h-full mt-8">
          {
                categorys.map(category => <SubCate key={category._id}
                    category={category}
                ></SubCate>)

            }
          </div>
            
        </div>
    );
};

export default CountryCate;