import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menus/Menu/Menu";
import Order from "../Pages/Order/order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";
import PrivatRoute from "./PrivatRoute";
import Secret from "../Pages/Shard/secret/Secret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
     {
        path:'/',
        element:<Home></Home>,
     },
     {
      path:'menu',
      element:<Menu></Menu>,
     },
     {
          
        path:'order',
        element:<Order></Order>,
     
     },
     {
      path:'order/:category',
      element:<Order></Order>,
     },
     {
      path:'login',
      element: <Login></Login>
     },
     {
      path:'signup',
      element: <SignUp></SignUp>,
     },
     {
      path: 'secret',
      element: <PrivatRoute>
        <Secret></Secret>
      </PrivatRoute>
     }
    ]
  },
]);