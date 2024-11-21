import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId, name, cuisines, avgRating,costForTwo, sla} = resData?.info
    return(
        <div className="restaurant-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img className="restaurant-image h-48 w-[200px] rounded-lg" alt="restaurant-image" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold text-lg pb-2"> {name} </h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;