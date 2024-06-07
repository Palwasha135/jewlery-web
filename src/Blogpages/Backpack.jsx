import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { useState,useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
const Backpack = () => {
   const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
   
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" mb-10">
      
      {showButton && (
        <button
          onClick={scrollToTop}
          className="z-10 fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-[#cb8161] text-white  focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="w-6 h-6" />
        </button>
      )}
      <div>
        <Section1 />
      </div>
      <div className=" flex flex-col-reverse lg:flex-row mx-4 lg:mx-4 mt-10 lg:mt-14 xl:mx-8 gap-10">
        <div className=" lg:w-1/4 "><Section2/></div>
        <div className="lg:w-3/4 "><Section3/></div>
      </div>
    </div>
  );
};

export default Backpack;