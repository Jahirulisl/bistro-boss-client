import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseCarts from "../hooks/UseCarts";

const DashBoard = () => {
  //for admine start
      //TODO: get isAdmin value from the database
 const isAdmin = true;
 



  //for admine start
  const [cart] = UseCarts();
  return (
    <div className="flex">
        {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400 m-4">
        <ul className="menu p-4">
         {/* dadikated naveLink */}
              {/* Admin Home*/}
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            Admin Home</NavLink>
            </li>
               {/* RESEVATION */}
            <li>
            <NavLink to="/dashboard/additems">
            <FaUtensils></FaUtensils>
            Add Items</NavLink>
            </li>

              {/* Manage Items */}
            <li>
            <NavLink to="/dashboard/manageitems">
            <FaList></FaList>
            Manage Items
            </NavLink>
            </li>  
               {/*Manage bookings */}
            <li>
            <NavLink to="/dashboard/bookings">
           <FaBook></FaBook>
            Manage Bookings
            </NavLink>
            </li>
               {/* all users */}
           <li>
            <NavLink to="/dashboard/allusers">
            <FaUsers></FaUsers>
            All Users
            </NavLink>
            </li> 
            </>
            :
            <>
            <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home</NavLink>
            </li>
               {/* RESEVATION */}
            <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendar></FaCalendar>
            RESERVATION</NavLink>
            </li>

              {/* PAYMENT HISTORY */}
            <li>
            <NavLink to="/dashboard/paymenthistory">
            <FaCcAmazonPay></FaCcAmazonPay>
            PAYMENTHISTORY
            </NavLink>
            </li>  
               {/* my cart */}
            <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
            My Cart ({cart.length})</NavLink>
            </li>
               {/* ADD REVIEW */}
            <li>
            <NavLink to="/dashboard/review">
            <FaAd></FaAd>
            ADD REVIEW
            </NavLink>
            </li>
               {/* MY BOOKING */}
           <li>
            <NavLink to="/dashboard/booking">
            <FaList></FaList>
            MY BOOKING
            </NavLink>
            </li> 
            </>
          }
              <div className="divider">or</div>
            <li>
              {/* saher naveLink */}
            <NavLink to="/">
            <FaHome></FaHome>
            User Home</NavLink>
            </li> 
               {/* menu     */}
            <li>
            <NavLink to="/order/salad">
            <FaSearch></FaSearch>
            MENUE</NavLink>
            </li> 
             {/* CONTACT */}
            <li>
            <NavLink to="/order/contact">
           <FaEnvelope></FaEnvelope>
            CONTACT </NavLink>
            </li>
        </ul>
        
      </div>
        {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet>

        </Outlet>
      </div>
    </div>
  );
};

export default DashBoard;