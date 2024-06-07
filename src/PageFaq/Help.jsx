import React from "react";
import necklace2 from "../Assets/necklace2.PNG";

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img
        src={necklace2}
        alt="necklace2"
        className="animated-image necklace-icon"
        style={{ width: "80px", height: "70px" }}
      />
      <h1 className="text-black font-semibold text-4xl cormorant-garamond-medium mt-10 mb-10">
        Need Help?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* col 1 */}
        <div className="text-center">
          <h1 className="tracking-widest uppercase text-sm mb-2 sm:mb-4">
            PHONE
          </h1>
          <h2 className="text-gray-500 lato-regular">(1900)1300 100 423</h2>
        </div>
        {/* col 2 */}
        <div className="text-center">
          <h1 className="tracking-widest uppercase text-sm mb-2 sm:mb-4">
            CUSTOMER SERVICE
          </h1>
          <p className="text-gray-500 lato-regular ">
            Monday to Friday
            <br /> 8:00am – 4:00pm Sydney, NSW time (UTC +10)
            <br /> Saturday and Sunday closed
          </p>
        </div>
        {/* col 3 */}
        <div className="text-center">
          <h1 className="tracking-widest uppercase text-sm mb-2 sm:mb-4">
            RETURNS
          </h1>
          <h2 className="text-gray-500 lato-regular ">
            For information on Returns and Refunds, please
            <br />
            click
            <a
              href="link-to-your-page"
              className="text-black underline ml-1 underline-offset-2"
            >
              here.
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Help;