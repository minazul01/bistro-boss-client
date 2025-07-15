import { Outlet, useLocation } from "react-router-dom";

import Footer from "./SubLayout/Footer";

import Navbar from "./SubLayout/Navbar";

const MainLayout = () => {
  // const location = useLocation();
  // const noHeaderFooter = location.pathname.includes('/login')

  return (
    <div>

    {/* noheaderFooter */}
    {/* { noHeaderFooter || <Navbar />}
      <Outlet />
      { noHeaderFooter || <Footer />} */}


      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
