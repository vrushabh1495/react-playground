import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between shadow-sm mb-2">
            <div className="logo-container">
                <img className="w-48" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4">
                    <li className="px-4"><Link to={'/'}>Home</Link></li>
                    <li className="px-4"><Link to={'/about'}>About Us</Link></li>
                    <li className="px-4"><Link to={'/contact'}>Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-button" onClick={()=>{updateBtnName()}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;