import { createBrowserRouter } from "react-router-dom";

import Contact from "../Pages/Contact/Contact";
import OurMenu from "../Pages/OurMenu/OurMenu";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurShop from "../Pages/OurShop/OurShop";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";

import Dashboard from "../Pages/Dashboard/DashboardUser/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import Card from "../Pages/Dashboard/DashboardHome/Card";
import PrivateRoutes from "../Context/AuthProvider/PrivateRoutes/Private";
import AllUsers from "../Pages/Dashboard/DashboardAdmin/AllUsers";
import PrivateAdmin from "../Context/AuthProvider/PrivateRoutes/PrivateAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our_menu",
        element: <OurMenu />,
      },
      {
        path: "/our_shop",
        element: <OurShop />,
      },
      {
        path: "/contact_us",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
         path: "/dashboard/home",
         element: <DashboardHome />
      },
      {
        path: "/dashboard/cart",
        element: <PrivateRoutes> <Card /> </PrivateRoutes>
      },


      // admin rool
      {
       path: "/dashboard/admin/users",
       element: <PrivateAdmin> <AllUsers /> </PrivateAdmin>
      },
    ]
  },
]);
