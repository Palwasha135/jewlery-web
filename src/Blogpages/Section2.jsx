import React from "react";
import "./Backpack.css";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from "../Assets/a1.jpg";
import img2 from "../Assets/a2.jpg";
import img3 from "../Assets/a3.jpg";

const Section2 = () => {
  return (
    <div className="mb-56">
      <div>
        <h2 className=" font-CormorantGaramond text-xl font-medium tracking-wide">SEARCH</h2>
        <div className="border flex border-[#e4e4e4] mr-1 mt-4">
          <input
            type="text"
            className="w-4/5 py-2 pl-2 focus:outline-none"
            placeholder="Search..."
          />
          <Link
            to=""
            className=" flex justify-center items-center text-2xl w-1/5 text-[#868686] hover:text-[#ff6900] hover:opacity-65"
          >
            <RiSearch2Line />
          </Link>
        </div>
      </div>
      <div className="mt-14">
        <h2 className=" font-CormorantGaramond text-xl font-semibold tracking-wide">
          CATEGORIES
        </h2>
        <ul className=" font-Lato text-sm">
          <li className="flex items-center mt-4">
            <MdKeyboardArrowRight className="text-[#ff6900] mr-1" />
            <Link to="" className="text-[#868686] hover:text-[#ff6900]  no-underline">
              Backpack (8)
            </Link>
          </li>
          <li className="flex items-center mt-3">
            <MdKeyboardArrowRight className="text-[#ff6900] mr-1" />
            <Link to="" className="text-[#868686] hover:text-[#ff6900]  no-underline">
              Fashion (4)
            </Link>
          </li>
          <li className="flex items-center mt-3">
            <MdKeyboardArrowRight className="text-[#ff6900] mr-1" />
            <Link to="" className="text-[#868686] hover:text-[#ff6900]  no-underline">
              Life Style (4)
            </Link>
          </li>
          <li className="flex items-center mt-3">
            <MdKeyboardArrowRight className="text-[#ff6900] mr-1" />
            <Link to="" className="text-[#868686] hover:text-[#ff6900] no-underline">
              Shorts (5)
            </Link>
          </li>
          <li className="flex items-center mt-3">
            <MdKeyboardArrowRight className="text-[#ff6900] mr-1" />
            <Link to="" className="text-[#868686] hover:text-[#ff6900] no-underline">
              Swimwear (4)
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-14">
        <h2 className=" font-CormorantGaramond text-xl font-semibold tracking-wide">
          RECENT POSTS
        </h2>
        <div className="flex pb-6 mt-5 lg:flex-col xl:flex-row border-b">
          <img
            src={img1}
            alt=""
            className="w-20  mr-2 lg:w-full xl:w-20 xl:h-20"
          />
          <div className="mt-4 ml-2 flex flex-col justify-start xl:justify-center xl:ml-4">
            <p className="text-sm text-[#9b9b9b] font-Lato">May 30, 2018</p>
            <h6 className="font-semibold  font-CormorantGaramond">
              Traveling Solo Is Awesome
            </h6>
          </div>
        </div>
        <div className="flex pb-6 mt-6 xl:mt-4 lg:flex-col xl:flex-row border-b">
          <img
            src={img2}
            alt=""
            className="w-20 mr-2  lg:w-full xl:w-20 xl:h-20"
          />
          <div className="mt-4 ml-2 flex flex-col justify-start xl:justify-center xl:ml-4">
            <p className="text-sm text-[#9b9b9b] font-Lato">May 30, 2018</p>
            <h6 className="font-semibold  font-CormorantGaramond">
              A Beautiful Sunday Morning
            </h6>
          </div>
        </div>
        <div className="flex mt-6 pb-3 xl:mt-4 lg:flex-col xl:flex-row">
          <img
            src={img3}
            alt=""
            className="w-20 mr-2  lg:w-full xl:w-20 xl:h-20"
          />
          <div className="mt-4 ml-2 flex flex-col justify-start xl:justify-center xl:ml-4">
            <p className="text-sm text-[#9b9b9b] font-Lato">May 30, 2018</p>
            <h6 className="font-semibold  font-CormorantGaramond">
              Kitchen Inspired On Japanese
            </h6>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h2 className=" font-CormorantGaramond text-xl font-semibold tracking-wide">
          ARCHIVES
        </h2>
        <ul className="font-Lato text-sm">
          <li className="flex items-center mt-4">
            <MdKeyboardArrowRight className="text-[#ff6900] mr-1" />
            <Link to="" className="text-[#868686] hover:text-[#ff6900]  no-underline">
              May 2018
            </Link>
          </li>
          <li className="flex items-center mt-3">
            <MdKeyboardArrowRight className="text-[#ff6900] mr-1" />
            <Link to="" className="text-[#868686] hover:text-[#ff6900] no-underline">
              April 2017
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-14">
        <h2 className=" font-CormorantGaramond text-xl font-semibold tracking-wide">TAGS</h2>
        <div className="mt-8">
          <ul className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-3 lg:grid-cols-2 items-center gap-2 font-Lato text-sm">
            {[
              "Baber",
              "Baby Needs",
              "Beauty",
              "Cosmetic",
              "Electric",
              "Fashion",
              "Food",
              "Jewelry",
              "Medical",
              "Organic",
              "Simple",
              "Sport",
            ].map((tag) => (
              <li
                key={tag}
                className="hidden overflow-hidden border-2 relative hover:inline-block hover-bg-bottom-to-top px-4 py-2 h-14 hover:text-white text-[#868686]"
              >
                <Link to="" className="block text-center w-full h-full ">
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;