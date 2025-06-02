import { useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import ResCategory from "./ResCategory";


const RestaurantMenu = () =>{   

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);   
    
    const [showIndex, setShowIndex] = useState(0);

    //const [showItems, setShowItems] = useState(false)
    

    if (resInfo === null) return <Shimmer/>    

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log("itemCard",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        // console.log("categories",categories )
    
return  (
    <div className="text-center">
        <h1 className="font-bold my-6 text-lg">{name}</h1>
        
        <p className="font-bold text-2xl">{cuisines. join(", ")} - {costForTwoMessage}</p>
        {/* <ul key={itemCards?.card?.info?.id}>
            {itemCards.map((itemCard)=>
            <li>{itemCard?.card?.info?.name} - Rs -{itemCard?.card?.info?.price/100} </li>)
            }
            
        </ul>
         */}
         {/* Categories accordian */}
         {categories.map((category, index)=>(
            <ResCategory 
            key={category.card?.card.title} 
            data={category.card?.card}
            // showItems={index=== showIndex ? true : false}
            // setShowIndex={()=>setShowIndex(index)}  
           showItems={index === showIndex} 
           setShowIndex={()=>setShowIndex(showIndex === index ? null : index)}
            />
            ))}
    </div>
)
}

export default RestaurantMenu;