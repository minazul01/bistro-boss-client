
import { Link } from "react-router-dom";

const pages = [
  <li key="home">
    <Link to="/">Home</Link>
  </li>,
  <li key="menu">
    <Link to="/our_menu">Our-Menu</Link>
  </li>,
  <li key="contact">
    <Link to="/contact_us">Contact</Link>
  </li>
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div
        className="
          max-w-[1300px] mx-auto
          navbar
          bg-white/20           
          backdrop-blur-md     
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
          <ul className="menu menu-horizontal px-1 text-white uppercase">{pages}</ul>
        </div>

        {/* Call to Action Button */}
        <div className="navbar-end">
          <a href="#" className="btn bg-primary text-white">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
