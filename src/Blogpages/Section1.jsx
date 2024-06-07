import React from "react";
import img1 from '../Assets/hero.jpg';
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div>
      <div
        className="relative  bg-center h-72"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative text-black text-center pt-20">
          <h1 className=" font-serif text-4xl lg:text-6xl mt-4">Backpack</h1>
          <div className="flex justify-center font-lato mt-4  gap-1">
            <Link className=' no-underline text-black'to="/">Home</Link>
            <span> &gt; </span>
            <p>Backpack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;