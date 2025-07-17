import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/Provider";
import { FaShoppingCart } from "react-icons/fa";
import useCards from "../../Hooks/useCards";



const Navbar = () => {
  const [card] = useCards();

  const { user, logOutUser } = useContext(AuthContext);

  const pages = [
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-lime-500 underline underline-offset-8 font-bold"
            : "hover:text-lime-400"
        }
        to="/"
      >
        Home
      </NavLink>
    </li>,
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-lime-500 underline underline-offset-8 font-bold"
            : "hover:text-lime-400"
        }
        to="/our_menu"
      >
        Our-Menu
      </NavLink>
    </li>,
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-lime-500 underline underline-offset-8 font-bold"
            : "hover:text-lime-400"
        }
        to="/our_shop"
      >
        our-shop
      </NavLink>
    </li>,
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-lime-500 underline underline-offset-8 font-bold"
            : "hover:text-lime-400"
        }
        to="/contact_us"
      >
        Contact
      </NavLink>
    </li>,
    // <li>
    //   <NavLink
    //     className={({ isActive }) =>
    //       isActive
    //         ? "text-lime-500 underline underline-offset-8 font-bold"
    //         : "hover:text-lime-400"
    //     }
    //     to="/dashboard"
    //   >
    //     Dashboard
    //   </NavLink>
    // </li>,
    <li className="relative">
      <Link
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-lime-500 underline underline-offset-8 font-bold"
            : "hover:text-lime-400"
        }
      >
        {/* Cart Icon */}
        <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
          <FaShoppingCart className="text-xl md:text-2xl" />
          {/* Badge */}
          <span className="badge badge-sm badge-secondary absolute -top-0.5 -right-4 text-xs">
           +{card?.length}
          </span>
        </div>
      </Link>
    </li>,
  ];
  return (
    <div className="fixed top-0 left-0 w-full z-10 ">
      <div
        className="
          max-w-[1300px] mx-auto
          navbar
         bg-black/30
          text-white
          px-5 py-2
          rounded-4xl
          my-4
        "
      >
        {/* Mobile Hamburger + Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="
                menu menu-sm dropdown-content
                bg-base-100 text-black
                rounded-box mt-3 w-52 p-2 shadow uppercase
              "
            >
              {pages}
            </ul>
          </div>
          <Link to="/" className=" text-3xl uppercase">
            Bistro
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="items-center menu menu-horizontal px-1 text-white uppercase">
            {pages}
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={logOutUser}
                className="btn bg-primary text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="btn bg-primary text-white" to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
