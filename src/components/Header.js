import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login")
    
    const contextData = useContext(UserContext);
    
    const updateBtnName = () => {
        if (btnName==='Login'){
            setBtnName("Logout");
        }
        else{
            setBtnName("Login");
        }
    }

    // Subscribing to the store using selector
    const cart = useSelector((store)=> store.cart.items);

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
                    <li className="px-4 font-bold">Cart - {cart.length}</li>
                    <button className="login-button" onClick={()=>{updateBtnName()}}>{btnName}</button>
                    <li className="px-4 font-bold">{contextData.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;