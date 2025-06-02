import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    const totalCost = cartItems.reduce((acc, item)=>{
        return acc + item?.card?.info?.price/100 * (item.quantity || 1);

    }, 0)

return(
    <div className="text-center m-10 p-10">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-red-300 rounded-lg" onClick={handleClearCart}>Clear cart</button>
        {cartItems.length === 0 ? (<h1 className="text-sm">Cart is empty. Please add items to the cart</h1>): ( <ItemList items={cartItems}/>)}        
        </div>
        <div>
            {cartItems.length > 0 && (
                <h2 className="text-lg font-semibold mt-4">Total : ${totalCost.toFixed(2)}</h2>
            )}
        </div>
    </div>
)
}

export default Cart;