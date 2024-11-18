import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login")

    const updateBtnName = () => {
        if (btnName==='Login'){
            setBtnName("Logout");
        }
        else{
            setBtnName("Login");
        }
    }
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={()=>{updateBtnName()}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;