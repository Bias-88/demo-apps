import RestaurantCard , {withPromotedlevel} from "./RestaurantCard";
import './Body.css';
//import resList from './utils/mockData';
import {useState, useEffect, useContext} from "react";
import Shimmer from "./components/Shimmer";
import { Link, useParams } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Body = () =>{   

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("")

    //console.log("body rendered", listOfRestaurants)

     const RestaurantCardPromoted = withPromotedlevel(RestaurantCard)

    useEffect(()=>{
        fetchData();
    },[])
    
   
    
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4215278&lng=77.0925159&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const jsonData = await data.json();

        //console.log("json data",jsonData);

        setListOfRestaurants(jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    //console.log("listOfRestaurants", listOfRestaurants)

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you're offline , please check your internet connection.</h1>
  }

  const {userName, setUserName} = useContext(UserContext)
       
return (listOfRestaurants.length === 0  ? <Shimmer/> : (
    
        <div className="body">
            <div className="flex px-4 py-2">
                <div className="p-4 m-4">
                    <input type="text"
                           className="border border-solid border-black" 
                           value={searchText} 
                           onChange={(e)=>{setSearchText(e.target.value)}}
                           />
                    <button className="px-4 py-2 m-4 rounded-lg" onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurants(filteredRestaurants)
                        console.log("filter", filteredRestaurants)
                    }}>Search</button>
                </div>   
                <div className="p-4 m-4 flex items-center">
                    <button className="px-4 py-2 m-4 rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((restaurants)=>restaurants.info.avgRating > 4.5 
                    ) 
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants
                </button>
                </div> 
                <div className="p-4 m-4 flex items-center">
                    <label>User name</label>
                    <input className="border border-black p-2" type="text"
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}/>
                </div>                
            </div>
            
            <div className="flex flex-wrap">
                {filteredRestaurants.map((resCards)=><Link to={"/restaurant/" + resCards.info.id} key={resCards.info.id}>{resCards.info.isOpen ? <RestaurantCardPromoted resData={resCards}/> : <RestaurantCard resData={resCards}/>}</Link>)}                          
            </div>
        </div>    
))

}

export default Body;