import { useState, useEffect, useContext } from "react"; 
import { Outlet } from "react-router-dom";
import Header from "./Header";
import UserContext from "./utils/UserContext";


const AppLayout = () =>{
     const[userName, setUserName] = useState();

      useEffect(()=>{
        //make an API call and send the username and password
        const data = {
            name: "Bias Pramanik"
        }
        setUserName(data.name)
    },[])


    return( 
    
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>  
    <div className="App">     
     <Header/>     
     <Outlet/>
    </div>  
    </UserContext.Provider>   
   
    )    
}

export default AppLayout;