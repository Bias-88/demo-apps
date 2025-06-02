import  { lazy, Suspense } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./AppLayout";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import { PageNotFound } from "./components/PageNotFound";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
//import Grocery from "./Grocery";

const Grocery = lazy(()=> import("./Grocery"));

const About = lazy(()=> import("./AboutUs"));

const AppRouter = () =>{
       
    const hashRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>, 
            children: [
                {
                    path: "/",
                    element: <Body/>
            
                },
                {
                    path: "/about",
                    element:<Suspense fallback={<h1>Loading ...</h1>}><AboutUs/></Suspense>           
                },
                {
                    path: "/contact",
                    element: <ContactUs/>
            
                },    
                {
                    path: "/grocery",
                    element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            
                },    
                {
                    path: "/restaurant/:resId",
                    element: <RestaurantMenu/>
            
                }, 
                {
                    path: "/cart",
                    element: <Cart/>
            
                },                  
            ]                      
        },
         
        {
            path: "*",
            element: <PageNotFound/>
            
        }
        
    ])
return(<RouterProvider router={hashRouter}/>)
}

export default AppRouter;