import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { BannerHello } from "./animations/BannerHello";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeDropdown = () => {
    setClick(false);
  };

  const content = (
    <>
      <div className=" cursor-pointer lg:hidden block absolute top-16 w-full left-0 right-0 main-bg transition-all ">
        <ul className=" m-auto text-center text-[1.4rem] gap-5 p-20 max-w-[400px] flex flex-col justify-center ">
          <Link spy={true} smooth={true} to="Home" onClick={closeDropdown}>
            <li className="my-4 py-4 border-b main-bg hover:bg-cyan-500 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About" onClick={closeDropdown}>
            <li className="my-4 py-4 border-b main-bg hover:bg-cyan-500  hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Skills" onClick={closeDropdown}>
            <li className="my-4 py-4 border-b main-bg hover:bg-cyan-500 hover:rounded">
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects" onClick={closeDropdown}>
            <li className="my-4 py-4 border-b main-bg hover:bg-cyan-500  hover:rounded">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact" onClick={closeDropdown}>
            <li className="my-4 py-4 border-b main-bg hover:bg-cyan-500  hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="main-bg">
      <div className="h-0vh flex justify-between z-50 text-white lg:py-5 px-5 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-[2.2rem] font-bold lg:text-[2.4rem] ">
            <BannerHello />
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[1.2rem] lg:text-[1.4rem]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-cyan-500 transition border-b-2 border-cyan-800 hover:border-cyan-500 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-cyan-500 transition border-b-2 border-cyan-800 hover:border-cyan-500 cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Skills">
                <li className="hover:text-cyan-500 transition border-b-2 border-cyan-800 hover:border-cyan-500 cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-cyan-500 transition border-b-2 border-cyan-800 hover:border-cyan-500 cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-cyan-500 transition border-b-2 border-cyan-800 hover:border-cyan-500 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};
