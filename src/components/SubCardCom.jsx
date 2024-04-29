import { useLoaderData, useParams } from "react-router-dom";
import ShowSubCard from "./ShowSubCard";


const SubCardCom = () => {
    const { country_Name}= useParams();
    const countryInfo = useLoaderData();
    console.log( country_Name, countryInfo)
    const info = countryInfo.filter( cart => cart.country_Name === country_Name)
    console.log(info)
    return (
        <div>
             <div className="grid grid-rows-1 lg:grid-cols-2  mt-6 gap-5 h-full">
          {
            info.map(cart => <ShowSubCard key={cart._id}
            cart={cart}></ShowSubCard>)
           }
           </div>
            
        </div>
    );
};

export default SubCardCom;