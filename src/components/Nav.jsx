import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 main-bg transition-all ">
        <ul className=" m-auto text-center text-xl p-20 max-w-[400px] flex flex-col justify-center ">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b main-bg hover:bg-orange-500 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b main-bg hover:bg-orange-500  hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b main-bg hover:bg-orange-500 hover:rounded">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b main-bg hover:bg-orange-500  hover:rounded">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b main-bg hover:bg-orange-500  hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="main-bg">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-5 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Welcome</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-orange-500 transition border-b-2 border-orange-800 hover:border-orange-500 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-orange-500 transition border-b-2 border-orange-800 hover:border-orange-500 cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-orange-500 transition border-b-2 border-orange-800 hover:border-orange-500 cursor-pointer">
                  Services
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-orange-500 transition border-b-2 border-orange-800 hover:border-orange-500 cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-orange-500 transition border-b-2 border-orange-800 hover:border-orange-500 cursor-pointer">
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

export default Nav;
