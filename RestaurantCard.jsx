import './RestaurantCard.css';
import { CDN_URL } from './utils/constant';

const RestaurantCard = (props) =>{

    const {resData} = props

    const {cloudinaryImageId, name, cuisines,avgRatingString, costForTwo  } = resData?.info
return (<>
<div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300" >
    <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId }/>
    <h3 className="font-bold py-3 text-black text-lg">{name}</h3>
    <h4 className="text-black">{cuisines.join(", ")}</h4>
    <h4>{avgRatingString} Stars</h4>
    <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    <h4>{costForTwo}</h4>    
</div>
</>)
}

export const withPromotedlevel = (RestaurantCard) =>{
    return(props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard