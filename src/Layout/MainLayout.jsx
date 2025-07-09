import { Outlet } from "react-router-dom";

import Footer from "./SubLayout/Footer";

import Navbar from "./SubLayout/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
