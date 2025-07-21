
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shard/Footer/Footer";
import NavBar from "../Pages/Shard/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
       <NavBar></NavBar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default MainLayout;