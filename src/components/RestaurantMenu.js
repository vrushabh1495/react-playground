import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const [resName, setResName] = useState(null);
    const [cuisine, setCuisine] = useState(null);
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo===null) return <Shimmer/>;
    
    if(resInfo!==null && resName===null || cuisine===null ){
        setResName(resInfo.cards[2].card.card.info.name)
        setCuisine(resInfo.cards[2].card.card.info.cuisines)
    } 


    if (resInfo===null) return <Shimmer/>;
    
    return (
        <div className="menu">
            <h1>{resName}</h1>
            <h2>{cuisine}</h2>
        </div>
    )
}

export default RestaurantMenu;