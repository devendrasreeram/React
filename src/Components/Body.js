// not using key(not accceptable) <<<<< index as key <<<< unique id (best practice)
import {useState} from "react";
import RestaurantCards from "./RestaurantCards";
import resList from "../../utils/mockData";
const Body=()=>{
    const [ListOfRestaurant,setListOfRestaurant]=useState(resList)
    return (
        <div className="Body-container">
            <div className="Filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                    const filteredList=ListOfRestaurant.filter(
                       (res)=>res.info.avgRating>4.2
                );
                setListOfRestaurant(filteredList);
            }}
            >
                Top Rated Restaurants
            </button>
            </div>
            <div className="Restaurent-container">
            {ListOfRestaurant.map((restaurant) => (
    <RestaurantCards key={restaurant.info.id} resData={restaurant} />
))}
            </div>
        </div>
    );
};

export default Body;