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
import DashBoard from "../LayOut/DashBoard";
import Cart from "../Pages/DashBord/cart/Cart";
import Reservaion from "../Pages/DashBord/cart/Reservaion";
import AdminHome from "../Pages/DashBord/adminhome/AdminHome";
import AllUsers from "../Pages/DashBord/cart/allusers/AllUsers";
import AddItems from "../Pages/DashBord/additems/AddItems";
import ManageBookings from "../Pages/DashBord/managebookings/ManageBookings";
import ManageItem from "../Pages/DashBord/manageitems/ManageItem";

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
  {
    path:'dashboard',
    element: <PrivatRoute>
      <DashBoard></DashBoard>
    </PrivatRoute>,
    children:[
      // {
      //   path: 'reservation',
      //   element: <Reservaion></Reservaion>
      // },
      {
        path: 'cart',
        element:<Cart></Cart>
      },
      //Admin routes start>
      {
        path:'adminhouse',
        element: <AdminHome></AdminHome>
      },
      {
        path:'additems',
        element: <AddItems></AddItems>
      },
      {
        path:'manageitems',
        element: <ManageItem></ManageItem>
      },
      {
        path:'bookings',
        element: <ManageBookings></ManageBookings>
      },
       {
        path:'allusers',
        element: <AllUsers></AllUsers>
      },
       //Admin routes start>
    ]
  }
]);