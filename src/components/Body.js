import RestaurantCard from "./RestaurantCard";
import restaurants_list from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

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
        set_updated_restuarant_list(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        set_complete_restaurant_list(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    const {loggedInUser,setUsername} = useContext(UserContext);

    return updated_restuarant_list.length===0 ? ( <Shimmer/> ) : ( 
        <div className="body">
            <div className="flex items-center">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black"value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button className="px-4 py-2 m-4 bg-green-200 rounded-lg" onClick={()=>{console.log(searchText)
                        const filtered_restuarant = complete_restaurant_list.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        set_updated_restuarant_list(filtered_restuarant);
                    }}>Search</button>
                </div>
                <div>
                <button className="px-4 py-2 m-4 bg-gray-50 rounded-lg" onClick={()=>{const filtered_restuarant_list = restaurants_list.filter((res) => res.info.avgRating > 4.5); set_updated_restuarant_list(filtered_restuarant_list)}}>Top rated restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label> UserName :  </label>
                    <input className="border border-black p-2" 
                    value={loggedInUser}
                    onChange={(e)=>{setUsername(e.target.value)}}></input>
                </div>
            </div>
            <div className="restaurant-container flex flex-wrap">
                {
                    updated_restuarant_list.map((restaurant)=>(<Link to={"/restaurants/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant}/></Link>))
                }
            </div>
        </div>
    )
}

export default Body;