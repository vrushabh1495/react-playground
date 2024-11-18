import RestaurantCard from "./RestaurantCard";
import restaurants_list from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [complete_restaurant_list, set_complete_restaurant_list] = useState([]);
    const [updated_restuarant_list, set_updated_restuarant_list] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const data_json = await data.json();
        console.log("The data is ", data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        set_updated_restuarant_list(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        set_complete_restaurant_list(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    return updated_restuarant_list.length===0 ? ( <Shimmer/> ) : ( 
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button onClick={()=>{console.log(searchText)
                        const filtered_restuarant = complete_restaurant_list.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        set_updated_restuarant_list(filtered_restuarant);
                    }}>Search</button>
                </div>
                <button className="filter-button" onClick={()=>{const filtered_restuarant_list = restaurants_list.filter((res) => res.info.avgRating > 4.5); set_updated_restuarant_list(filtered_restuarant_list)}}>Top rated restaurants</button>
            </div>
            <div className="restaurant-container">
                {
                    updated_restuarant_list.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body;