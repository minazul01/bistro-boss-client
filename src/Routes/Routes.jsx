import { createBrowserRouter } from "react-router-dom";

import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

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
        path: "/contact_us",
        element: <Contact></Contact>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/our_menu",
        element: <OurMenu />
      },
    ],
  },
]);
