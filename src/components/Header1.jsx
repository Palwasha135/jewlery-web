import React from "react";
import { CiSearch } from "react-icons/ci";

import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <div className=" md:flex hidden justify-between p-4 ">
        <div className="transition-transform hover:translate-y-1 hover:text-[#cb8161]  ">
          <button type="submit">
            <CiSearch />
          </button> 
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="cursor-pointer"
          />
        </div>

        <div className="flex justify-end cursor-pointer">
          <IoBagOutline
            size={20}
            className=" transition-transform hover:-translate-y-1 hover:text-[#cb8161]"
          />
          <IoPersonOutline
            size={20}
            className=" transition-transform hover:-translate-y-1 hover:text-[#cb8161]"
          />
          <IoIosHeartEmpty
            size={20}
            className=" transition-transform hover:-translate-y-1 hover:text-[#cb8161]"
          />
        </div>
      </div>
      <div className="pt-3">
        <img
          className="mx-auto "
          alt="logo"
          width="100"
          src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/logo.png"
        />
      </div>
    </div>
  );
};

export default Header;
