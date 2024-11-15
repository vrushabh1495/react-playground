import RestaurantCard from "./RestaurantCard";
import restaurants_list from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // let updated_restuarant_list = restaurants_list
    const [updated_restuarant_list, set_updated_restuarant_list] = useState(restaurants_list)
    return(
        <div className="body">
            <div className="filter">
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