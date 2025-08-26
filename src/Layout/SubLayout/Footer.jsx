

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {

  return (
    <footer className="max-w-[1550px] mx-auto bg-blue-950 rounded-xl w-full p-6 lg:p-9">
      <div className="flex justify-evenly gap-[30px] flex-wrap w-full h-full border-2 items-center">
        <div className="lg:w-[25%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            About The Store
          </h3>
          <div className="flex flex-col gap-[8px] text-white">
            <span>
              <Link to='/' className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                HOME
              </Link>
            </span>
            <span>
              <Link to='our_menu' className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                OUR-MENU
              </Link>
            </span>
            <span>
              <Link to='our_shop' className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                OUR-SHOP
              </Link>
            </span>
            <span>
              <Link to='/login' className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
               LOGIN
              </Link>
            </span>
            
            <span>
              <Link to='contact_us' className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Contact us
              </Link>
            </span>
          </div>
        </div>
        <div className="lg:w-[20%] flex flex-col border-2 items-end justify-center">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            Get in touch
          </h3>
          <div className="flex gap-[7px] text-white">
            <Link to='https://www.facebook.com/minazul.islam.38795' className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <CgFacebook />
            </Link>
            <Link to='https://x.com/home' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsTwitter />
            </Link>
            <Link to='https://www.instagram.com/' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsInstagram />
            </Link>
            <Link to='https://www.linkedin.com/in/minazul-ahmed-2371972b5/' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
