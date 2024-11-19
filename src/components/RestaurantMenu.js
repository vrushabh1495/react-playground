import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resName, setResName] = useState(null);
    const [cuisine, setCuisine] = useState(null);
    
    const { resId } = useParams();
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    

    const fetchMenu = async () => {
        const data =  await fetch(MENU_API+resId)
        const json = await data.json()
        setResInfo(json.data);
        setResName(json.data.cards[2].card.card.info.name);
        setCuisine(json.data.cards[2].card.card.info.cuisines)
    };

    if (resInfo===null) return <Shimmer/>;
    
    return (
        <div className="menu">
            <h1>{resName}</h1>
            <h2>{cuisine}</h2>
        </div>
    )
}

export default RestaurantMenu;