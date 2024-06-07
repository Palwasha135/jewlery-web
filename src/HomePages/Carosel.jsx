import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { IoBagOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
function Slick() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const images = [
    {
      default:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2018/05/10-6.jpg",
      hover:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2018/05/10-7-450x450.jpg",
      title: "Yilver And Turquoise Earrings",
      price: "$90.00-$214.22",
    },
    {
      default:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2019/04/10.jpg",
      hover:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2019/04/10-1-450x450.jpg",
      title: "Z 6.36 CT TGW Cubic Zirconia",
      price: "$79.00",
    },
    {
      default:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2020/12/14-6.jpg",
      hover:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2020/12/14-7-450x450.jpg",
      title: "Zubic Zirconia Claw Set Stud Earrings",
      price: "$200.00",
    },
    {
      default:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2020/12/10-9.jpg",
      hover:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2020/12/11-450x450.jpg",
      title: "Yintage Medallion Necklace",
      price: "$90.00",
    },
    {
      default:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2020/12/10-2.jpg",
      hover:
        "https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2020/12/10-5-450x450.jpg",
      title: "Z 7-8mm Freshwater Button Pearl",
      price: "$35.00",
    },
  ];

  return (
    <div className="md:p-20 p-10 h-3/5 bg-cover bg-[url('https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/4-1.jpg')]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="px-2 relative" key={index}>
            <img
              src={hoveredIndex === index ? image.hover : image.default}
              alt={`Slider pic ${index + 1}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
            {hoveredIndex === index && (
              <div
                className="absolute top-10 right-5 m-2  gap-5"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link className=" text-gray-500">
                  <IoBagOutline
                    size={30}
                    className=" transition-transform hover:bg-[#cb8161] hover:-translate-y-1 hover:text-white  border-2 "
                  />
                </Link>
                <Link className=" text-gray-500">
                  <IoIosHeartEmpty
                    size={30}
                    className="transition-transform hover:bg-[#cb8161] hover:-translate-y-1 hover:text-white  border-2"
                  />
                </Link>
                <Link className=" text-gray-500">
                  <CiSearch
                    size={30}
                    className="transition-transform hover:bg-[#cb8161] hover:-translate-y-1 hover:text-white  border-2"
                  />
                </Link>
              </div>
            )}

            <div className="space-x-1 flex justify-center mt-10">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 mx-px fill-current text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                ))}
              <svg
                className="w-3 h-3 mx-px fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <p className="hidden md:block">(one review)</p>
            </div>
            <div className=" text-center justify-center text-sm">
              <h6 className="flex text-center justify-center ">
                {image.title}
              </h6>
              <p className="text-[#cb8161]">{image.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick;
