import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React from "react";
import Header from "./Header1";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <Header />
      {/* Desktop Navbar */}
      <div className=" sticky w-full h-20 shadow-md  md:bg-[#cb8161] z-30 ">
        <div className="  w-full h-full px-4 2xl:px-16 py-10 ">
          <div>
            <ul className="hidden md:flex  text-center justify-center  ">
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-white">
                <Link to="/" className="no-underline text-white">
                  Home
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-white">
                <Link to={"/Shop"} className="no-underline text-white ">
                  Shop
                </Link>
              </li>
              
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-white">
                <Link to={"/Blog"} className="no-underline text-white">
                  Blog
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-white">
                <Link to={"/Page"} className="no-underline text-white">
                  Page
                </Link>
              </li> 
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-white">
                <Link to={"/Contact"} className="no-underline text-white">
                  Contact
                </Link>
              </li>
            </ul>

            <div  className="md:hidden">
              <AiOutlineMenu size="20" color="black" onClick={handleNav}/>
              <IoBagOutline
                style={{
                  size: "20",
                  position: "absolute",
                  right: 15,
                  bottom: 30,
                }}
              />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }`}
        >
          <div
            className={`${
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }`}
          >
            <div className="flex w-full items-center justify-end text-white  bg-[#cb8161] z-30">
              <h6>Close</h6>
              <div onClick={handleNav} className=" p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>

            <div className="py-4 flex flex-col  justify-start">
              <ul className="uppercase  leading-tight">
                <Link to="/" className="text-black no-underline">
                  <li className="py-1" onClick={handleNav}>
                    HOME
                    <hr className="text-black" />{" "}
                  </li>
                </Link>

                <Link to={"/Shop"} className="text-black no-underline">
                  <li className="py-1" onClick={handleNav}>
                    SHOP
                    <hr className="text-black" />
                  </li>
                </Link>

              
                <Link to={"/Blog"} className="text-black no-underline">
                  <li className="py-1" onClick={handleNav}>
                    BLOG
                    <hr className="text-black" />
                  </li>
                </Link>
                <Link to={"/Page"} className="text-black no-underline">
                  <li className="py-1" onClick={handleNav}>
                    PAGE
                    <hr className="text-black" />
                  </li>
                </Link>
                <Link to={"/Contact"} className="text-black no-underline">
                  <li className="py-1" onClick={handleNav}>
                    Contact
                    <hr className="text-black" />
                  </li>
                </Link>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
