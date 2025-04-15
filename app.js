import React from "react";
import ReactDOM from "react-dom/client";
import resList from './utils/mockData';
import Body from "./src/Components/Body.js";
import Header from "./src/Components/Header";
import RestaurantCards from "./src/Components/RestaurantCards";


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
