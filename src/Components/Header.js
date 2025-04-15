import {LOGO_URL} from "../../utils/constants";
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo"src={LOGO_URL}></img>
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

export default Header;