import User from "./User";

import UserClass from "./UserClass";
import UserContext from "./utils/UserContext";

const AboutUs = () =>{
   
return(
    <div>
       <h1>About</h1> 
       <h2>This is my about us component</h2>
       <div>
        LoggedInUser
        <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-lg font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
       </div>
       {/* <User name={"Bias Pramanik(Function)"}/> */}

       <UserClass name={"Bias Banerjee (class)"} location={"Gurugram"}/>
    </div>
)
}

export default AboutUs;