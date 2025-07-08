import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="max-w-[1550px] mx-auto bg-blue-950 rounded-xl w-full p-6 lg:p-9">
      <div className="flex justify-evenly gap-[30px] flex-wrap w-full h-full border-2 items-center border-red-500">
        <div className="lg:w-[25%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            About The Store
          </h3>
          <div className="flex flex-col gap-[8px] text-white">
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Home
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Become a customer
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                About us
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                FAQ
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Return policy
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Contact us
              </a>
            </span>
          </div>
        </div>
        <div className="lg:w-[20%] flex flex-col border-2 items-end justify-center border-red-500">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            Get in touch
          </h3>
          <div className="flex gap-[7px] text-white">
            <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <CgFacebook />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsTwitter />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsInstagram />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
