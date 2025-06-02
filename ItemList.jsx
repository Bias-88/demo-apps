import { CDN_URL } from "./utils/constant";
import { useDispatch } from "react-redux";
import {addItems} from "./utils/cartSlice";

const ItemList = ({ items }) => {
    // console.log("itemList", items)
const dispatch = useDispatch()
    const handleAddItem = (item)=>{
        //Dispatch an action
        dispatch(addItems(item))
    }
    
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    <div className="flex justify-between">
                        <div className="py-2 w-9/12">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                                <button className="p-2 mx-10 my-20 bg-white shadow-lg" onClick={()=>handleAddItem(item)}>Add +</button>
                            </div>
                            <img className="w-36" src={CDN_URL + item?.card?.info?.imageId} />
                        </div>
                    </div>
                    <div>
                        <p className="text-xs w-9/12">{item?.card?.info?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
