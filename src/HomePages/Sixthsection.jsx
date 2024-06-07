import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import Slider from "react-slick";
import { FaInstagram } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { useState, useEffect } from "react";
import Lastslider from "./Lastslider";
const Sixthsection = () => {
  const [slidesToShow, setSlidesToShow] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 668) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 400) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(2);
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
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  return (
    <div className="overflow-hidden">
      <section className="  bg-cover bg-[url('https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/5-1.jpg)')]">
        <div className=" font-CormorantGaramond text-5xl text-[#cb8161] text-center  ">
          <SlSocialInstagram className="mx-auto hover:animate-bounce pt-4 md:pt-4 " />
          <h1 className="pb-4">Mojuri instagram</h1>
        </div>
        <div className="slider-container  ">
          <Slider {...settings} className="mx-4">
            <div
              className="group relative overflow-hidden w-52"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/1-2.jpg"
                className=" transition-transform duration-500 transform group-hover:scale-125 hover:opacity-65 mx-3"
                alt="slides"
              />{" "}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaInstagram size={30} className=" text-5xl text-white" />
                </div>
              )}
            </div>
            <div
              className="group relative overflow-hidden w-52"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img
                src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/2-2.jpg"
                className="transition-transform duration-500 transform group-hover:scale-125 hover:opacity-65 mx-3"
                alt="slides"
              />
              {isHovered2 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaInstagram size={30} className=" text-5xl text-white" />
                </div>
              )}
            </div>
            <div
              className="group relative overflow-hidden w-52"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img
                src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/3-2.jpg"
                className=" transition-transform duration-500 transform group-hover:scale-125 hover:opacity-65 mx-3"
                alt="slides" />
              {isHovered3 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaInstagram size={30} className=" text-5xl text-white" />
                </div>
              )}
            </div>
            <div
              className="group relative overflow-hidden w-52"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img
                src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/4-2.jpg"
                className="transition-transform duration-500 transform group-hover:scale-125 hover:opacity-65  mx-3"
                alt="slides"
             />
              {isHovered4 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaInstagram size={30} className=" text-5xl text-white" />
                </div>
              )}
            </div>
            <div
              className="group relative overflow-hidden w-52"
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              <img
                src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/5-2.jpg"
                className="transition-transform duration-500 transform group-hover:scale-125 hover:opacity-65 mx-3"
                alt="slides"
              />
              {isHovered5 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaInstagram size={30} className=" text-5xl text-white" />
                </div>
              )}
            </div>
            <div
              className="group relative overflow-hidden w-52"
              onMouseEnter={() => setIsHovered6(true)}
              onMouseLeave={() => setIsHovered6(false)}
            >
              <img
                src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/6-2.jpg"
                className="transition-transform duration-500 transform group-hover:scale-125 hover:opacity-65 mx-3"
                alt="slides"
             />
              {isHovered6 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaInstagram size={30} className=" text-5xl text-white" />
                </div>
              )}
            </div>{" "}
          </Slider>
        </div>
      </section>

      <section className="pt-24 pb-20 p-4 ">
        <h1 className=" font-CormorantGaramond md:text-5xl text-3xl text-[#cb8161] text-center pt-7">
          Latest From MoJuri!
        </h1>
        <p className=" font-Lato text-center">
          Sign-up to receive 10% off your next purchase. Plus hear about new
          arrivals and offers.
        </p>
        <div className=" text-center block justify-between  mb-3">
          <input
            type="text"
            name="email"
            placeholder="Email address"
            className=" border-b-2 border-black w-52  "
          />
          <button className="border-b-2  ml-12  border-black">Submit</button>
        </div>
      </section>
      <section className="relative bg-cover bg-[url('https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/6-1.jpg')] h-[65vh] mb-3 pb-4">
        <div className="absolute inset-0  flex justify-center items-center m-14  ">
          <div className="bg-white  p-7  shadow-lg  mt-14   mb-4">
            <div className="flex flex-col justify-center items-center ">
              <CiHome
                className="fill-[#cb8161] hover:animate-wobble"
                size={30}
              />
              <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#cb8161] font-CormorantGaramond">
                Visit Our Store
              </h2>
              <p className="mb-4 text-center font-Lato">
                Rains HQ, Jens Olsens Vej 13 ,8200 Aarhus N, Denmark
                <br />
                Email : sayhello@sienastore.com
                <br />
                Phone : (+45) 7199 2516
              </p>
            </div>
          </div>
        </div>
      </section>
<Lastslider/>
      
    </div>
  );
};

export default Sixthsection;
