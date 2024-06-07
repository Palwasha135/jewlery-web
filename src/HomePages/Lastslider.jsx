import React from 'react'
import { useState, useEffect } from "react";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const Lastslider = () => {
    const [slidesToShow, setSlidesToShow] = useState();

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setSlidesToShow(5);
        }  else {
          setSlidesToShow(3);
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
  return (
    <div>
      <Slider {...settings} className="mx-4 ">
        <div>
          <Link>
            <img alt='slidesimg'
              className="md:w-44 w-32 hover:animate-wobble"
              src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/brand-1.jpg"
            />
          </Link>
        </div>
        <div>
          <Link>             <img alt='slidesimg'
              className="md:w-44 w-32 hover:animate-wobble"
              src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/brand-2.jpg"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img alt='slidesimg'
              className="md:w-44 w-32 hover:animate-wobble"
              src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/brand-3.jpg"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img alt='slidesimg'
              className="md:w-44 w-32 hover:animate-wobble"
              src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/brand-4.jpg"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img alt='slidesimg'
              className="md:w-44 w-32 hover:animate-wobble"
              src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/brand-5.jpg"
            />
          </Link>
        </div>
      </Slider>
    </div>
  )
}

export default Lastslider

