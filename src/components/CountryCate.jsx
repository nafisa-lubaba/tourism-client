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
            {/* <h2>country_name:{category[0].country_Name}</h2> */}
            {
                categorys.map(category => <SubCate key={category._id}
                    category={category}
                ></SubCate>)

            }
            
        </div>
    );
};

export default CountryCate;