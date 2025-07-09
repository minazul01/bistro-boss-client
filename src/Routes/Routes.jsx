import { createBrowserRouter } from "react-router-dom";

import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurShop from "../Pages/OurShop/OurShop";

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
        element: <OurMenu />
      },
      {
        path: "/our_shop/:category",
        element: <OurShop />
      },
      {
        path: "/contact_us",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
    ],
  },
]);
