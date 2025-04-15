import {CDN_URL} from "../../utils/constants";
import resList from "../../utils/mockData";
const RestaurantCards=(props)=>{
    const {resData} = props
    const{ name, cuisines,avgRating, cloudinaryImageId, costForTwo }= resData.info;
    const { deliveryTime } = resData.info.sla
    return (
        <div className="restaurent-carts">
            <img className="cold-coffee"src={CDN_URL+cloudinaryImageId} alt={name}></img>
            <h4>{ name}</h4>
            <h5>{cuisines?.join(", ")}</h5> 
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo} </h5>  
            <h5>{deliveryTime} mins</h5>  
        </div>
    );
};

export default RestaurantCards;