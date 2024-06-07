import React from "react";
import G1 from "../Assets/grid1.jpg";
import G2 from "../Assets/grid2.jpg";
import G3 from "../Assets/grid3.jpg";
import G4 from "../Assets/grid4.jpg";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const Secondgrid = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 668) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 380) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

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
    <div>
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
        <Slider {...settings} className=" mx-12">
          <div className="relative flex items-center justify-center ">
            <div className="m-2">
              <img src={G1} className="hover:animate-wobble" alt="Product" />
              <div className="absolute inset-0 flex items-end justify-around pointer-events-none">
                <button className="bg-white px-2 md:py-2 pointer-events-auto mb-4">
                  SHOP BRACELETS
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center ">
            <div className="m-2">
              <img src={G2} alt="gridimg" className="hover:animate-wobble" />
              <div className="inset-0 absolute flex items-end justify-around pointer-events-none">
                <button className="bg-white px-2 md:py-2 pointer-events-auto mb-4">
                  SHOP EARRINGS
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="m-2">
              <img src={G3} className="hover:animate-wobble" alt="Product" />
              <div className="absolute inset-0 flex items-end justify-around pointer-events-none">
                <button className="bg-white px-2 md:py-2 pointer-events-auto mb-4">
                  SHOP NECKLACES
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="m-2">
              <img src={G4} className="hover:animate-wobble" alt="Product" />
              <div className="absolute inset-0 flex items-end justify-around pointer-events-none">
                <button className="bg-white px-2 md:py-2 pointer-events-auto mb-4">
                  Shop RINGS
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Secondgrid;
