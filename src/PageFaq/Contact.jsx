import React, { useState, useEffect } from "react";
import Map from "./Map";
import Help from "../PageFaq/Help";
import Contactform from "../PageFaq/Contactform";
import { IoIosArrowUp } from "react-icons/io";

const Contact = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
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
    <div className="overflow-x-auto">
      {/* <Popup /> */}
      <Map />
      <Help />
      <Contactform />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="z-10 fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-[#cb8161] text-white  focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Contact;