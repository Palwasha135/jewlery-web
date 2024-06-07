// OverlayBox.js
import React from "react";

import { AiOutlineClose } from "react-icons/ai";
const OverlayBox = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0  w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-10  ">
      <div className="flex relative" >
       
    <AiOutlineClose
    onClick={onClose}     size={20}
    className="cursor-pointer top-3 right-2 flex justify-start absolute  z-20"
/>
        <img
          className="md:w-72 w-32 rounded-md" alt="overlay img"
          src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/08/newsletter-image.jpg"
        />
        <div className="bg-white md:p-4 p-2 rounded-lg text-center md:w-96 w-52 ">
          <h6 className=" font-CormorantGaramond md:text-4xl text-xl">
            Get free shipping
          </h6>
          <p>on your first order. Offer ends soon.</p>
          <div className="flex  flex-col md:flex-row gap-2 md:gap-0  ">
            <input
              type="text"
              className="border-gray-400 border-1 p-2 w-44  md:w-64  mx-auto"
              placeholder="Enter Your Email "
            />
            <button className=" md:px-4  px-1 py-2  bg-black text-white w-24 mx-auto">
              SUBSCRIBE
            </button>
          </div>{" "}
          <button onClick={onClose} className="text-[#cb8161] flex mx-auto md:py-3 ">
            <p>No Thanks!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverlayBox;
