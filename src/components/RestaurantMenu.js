import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {

    const [resName, setResName] = useState(null);
    const [cuisine, setCuisine] = useState(null);
    const contextData = useContext(UserContext);
    console.log(contextData);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> { return c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"})
    

    if (resInfo===null) return <Shimmer/>;
    
    if(resInfo!==null && resName===null || cuisine===null ){
        setResName(resInfo.cards[2].card.card.info.name)
        setCuisine(resInfo.cards[2].card.card.info.cuisines)
    } 


    if (resInfo===null) return <Shimmer/>;
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resName}</h1>
            <h2 className="font-bold text-lg">{cuisine}</h2>
            {categories.map(
                (category) => (
                <RestaurantCategory data={category?.card.card}/>
                ))}
        </div>
    )
}

export default RestaurantMenu;