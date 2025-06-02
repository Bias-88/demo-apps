import { useState, useContext, useEffect } from 'react';
import './Header.css';
import { LOGO_URL } from './utils/constant';
import {Link} from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
import UserContext from './utils/UserContext';
import { useSelector } from 'react-redux';


const Header = () =>{
    const [loginButton, setLoginButton] = useState("Login");

    const onlineStatus = useOnlineStatus();  

    const {loggedInUser} = useContext(UserContext)  
    
    console.log(loggedInUser);

    //Subscribing to the store using selector

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems)

return (<>
<div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50 w-auto">
    <div className="logo-container">
        <img className="w-24" src={LOGO_URL}/>
    </div>
    <div className="nav-item">
        <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "🟩 ": "🔴"}</li>            
            <li className="px-4"><Link to="/"> Home</Link></li>
            <li className="px-4"><Link to="/about"> About us</Link></li>
            <li className="px-4"><Link to="/grocery"> Grocery</Link></li>
            <li className="px-4"><Link to="/contact"> Contact us</Link></li>
            <li className="px-4"><Link to="/cart">Cart--({cartItems.length} items)</Link></li>
            <button className="login" onClick={()=>{
                loginButton==="Login" ? setLoginButton("Logout") : setLoginButton("Login")
            }}>{loginButton}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
    </div>
</div>
</>)
}

export default Header;