import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    const [login,setLogin]= useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{ 
                       login==="Login"? setLogin("Logout"):setLogin("Login");
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;