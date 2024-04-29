import { useLoaderData } from "react-router-dom";
import View from "../components/View";


const AllTouristsSpot = () => {
    const cards = useLoaderData()
    return (
        <div className="mx-auto">
        <h2>card:{cards.length}</h2>
      <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full">
      {
        cards.map(card => <View key={card._id}
        card={card}></View>)
       }
      </div>
    </div>
        
    );
};

export default AllTouristsSpot;