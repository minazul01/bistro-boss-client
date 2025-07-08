import { Outlet } from "react-router-dom";

import Footer from "./SubLayout/Footer";
import Home from "../Pages/Home/Home";


import Navbar from "./SubLayout/Navbar";

const MainLayout = () => {
  return (
    <div>
   
        <Navbar />
        <Outlet />
        <Footer />
     
    </div>
  );
};

export default MainLayout;
