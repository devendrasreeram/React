import React from "react";
import ReactDOM from "react-dom/client";
import resList from './mockData';

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo"src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-food-logo-png-image_7932067.png"></img>
            </div>
            <div className="Nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Carts</li>
                   </ul>
            </div>
        </div>
    )
}

const RestaurantCards=(props)=>{
    const {resData} = props
    const{ name, cuisines,avgRating, cloudinaryImageId, costForTwo }= resData.info;
    const { deliveryTime } = resData.info.sla
    return (
        <div className="restaurent-carts">
            <img className="cold-coffee"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} alt={name}></img>
            <h4>{ name}</h4>
            <h5>{cuisines?.join(", ")}</h5> 
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo} </h5>  
            <h5>{deliveryTime} mins</h5>  
        </div>
    );
};

    
// not using key(not accceptable) <<<<< index as key <<<< unique id (best practice)
const Body=()=>{
    return (
        <div className="Body-container">
            <div className="Search">Search</div>
            <div className="Restaurent-container">
            {resList.map((restaurant) => (
    <RestaurantCards key={restaurant.info.id} resData={restaurant} />
))}
            </div>
        </div>
    )
}



const AppLayout=()=>{
    return(
    <div className="App">
        <Header/>
        <Body/>
    </div>
    )
};
console.log(<AppLayout/>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 
