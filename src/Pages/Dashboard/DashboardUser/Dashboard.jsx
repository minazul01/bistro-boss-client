import {
  FaHome,
  FaCalendar,
  FaPaypal,
  FaCalendarPlus,
  FaShoppingCart,
  FaWindowRestore,
  FaBars,
  FaTimes,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { IoTimeSharp } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { AiFillShopping, AiOutlineMenu } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCards from "../../../Hooks/useCards";
import { useState } from "react";
import useAdmin from "../../../Hooks/useAdmin";


const Dashboard = () => {
  const [card] = useCards();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const SidebarLink = ({ icon, to, label }) => (
    <div className="flex items-center gap-2">
      {icon}
      <NavLink
        to={to}
        onClick={() => setIsOpen(false)} // auto-close on mobile
        className={({ isActive }) =>
          isActive ? "text-white font-bold underline" : "text-black"
        }
      >
        {label}
      </NavLink>
    </div>
  );

  // admin role
  const [isAdmin, isAdminLoading] = useAdmin();
 



  return (
    <section className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Mobile Topbar */}
      <div className="flex justify-between items-center md:hidden p-4 bg-[#D1A054] text-white">
        <h1 className="text-xl font-bold">BISTRO BOSS</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-[#D1A054] text-black w-64 md:w-1/5 fixed md:static top-0 left-0 h-full z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="py-6 px-6 space-y-5 text-[1rem] uppercase">
          <h1 className="text-2xl font-bold uppercase">BISTRO BOSS</h1>
          <h2 className="text-xl font-medium pb-10 uppercase">Restaurant</h2>

          {/* Sidebar Links */}
          <div className="space-y-4 uppercase">
            {isAdmin ? 
            <>
            <SidebarLink icon={<FaHome />} to="/dashboard/admin/home" label="Admin Home" />
            <SidebarLink icon={<IoTimeSharp />} to="/dashboard/admin/times" label="Add Times" />
            <SidebarLink icon={<TbCalendarTime />} to="/dashboard/admin/manage" label="Manage Times" />
            <SidebarLink icon={<FaBook />} to="/dashboard/admin/booking" label="Manage Booking" />
            <SidebarLink icon={<FaUsers />} to="/dashboard/admin/users" label="All Users" />
            
            </>
            :
            <>
            <SidebarLink icon={<FaHome />} to="/dashboard/home" label="User Home" />
            <SidebarLink icon={<FaCalendar />} to="/dashboard/reservation" label="Reservation" />
            <SidebarLink icon={<FaPaypal />} to="/dashboard/payment" label="Payment History" />
            <SidebarLink icon={<FaCalendarPlus />} to="/dashboard/booking" label="My Booking" />
            <SidebarLink
              icon={<FaShoppingCart />}
              to="/dashboard/cart"
              label={`My Cart (${card?.length || 0})`}
            />
            <SidebarLink icon={<FaWindowRestore />} to="/dashboard/review" label="My Review" />
            </>
            }

            <hr className="my-4" />
             {/* same admin and user */}
            <SidebarLink icon={<FaHome />} to="/" label="Home" />
            <SidebarLink icon={<AiOutlineMenu />} to="/" label="Menu" />
            <SidebarLink icon={<AiFillShopping />} to="/" label="Shop" />
            <SidebarLink icon={<MdOutlineContactPhone />} to="/" label="Contact" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1  p-4 bg-gray-50 overflow-y-auto min-h-screen">
        <Outlet />
        {isAdminLoading && <p>Loading admin status...</p>}
      </main>
    </section>
  );
};

export default Dashboard;
