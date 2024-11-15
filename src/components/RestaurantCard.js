import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId, name, cuisines, avgRating,costForTwo, sla} = resData?.info
    return(
        <div className="restaurant-card">
            <img className="restaurant-image" alt="restaurant-image" src={CDN_URL+cloudinaryImageId}></img>
            <h3> {name} </h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;