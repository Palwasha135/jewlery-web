/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <h1 className="cormorant-garamond-medium text-3xl md:text-6xl text-center">
        Contact Us
      </h1>
      <div className="flex justify-center items-center px-32 mt-12">
        <iframe
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
          aria-label="London Eye, London, United Kingdom"
          style={{ width: "1000px", height: "500px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;