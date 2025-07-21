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
import AdminHome from "../Pages/Dashboard/DashboardAdmin/AdminHome";
import AddItems from "../Pages/Dashboard/DashboardAdmin/AddItems";
import ManageItem from "../Pages/Dashboard/DashboardAdmin/MangeItem";
import UpdateItem from "../Pages/Dashboard/DashboardAdmin/UpdateItem";
import { param } from "framer-motion/client";

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
    children: [
      // general users pages
      {
        path: "home", // ✅ no slash
        element: <DashboardHome />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Card />
          </PrivateRoutes>
        ),
      },

      // admin role pages
      {
        path: "admin/users",
        element: (
          <PrivateAdmin>
            <AllUsers />
          </PrivateAdmin>
        ),
      },
      {
        path: "admin/home",
        element: (
          <PrivateAdmin>
            <AdminHome />
          </PrivateAdmin>
        ),
      },
      {
        path: "admin/items",
        element: (
          <PrivateAdmin>
            <AddItems />
          </PrivateAdmin>
        ),
      },{
        path: "admin/manage",
        element: <PrivateAdmin> <ManageItem /> </PrivateAdmin>
      },
      {
        path: "admin/manage/update_item/:id",
        element: <PrivateAdmin> <UpdateItem /> </PrivateAdmin>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ],
  },
]);
