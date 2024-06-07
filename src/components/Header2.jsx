import React from "react";
import { PiVanDuotone } from "react-icons/pi";
import { TbArrowsExchange2 } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";

const Header2 = () => {
  return (
    <div>
      <div className="flex  justify-around items-center  sm:flex-row  flex-col   ">
        <h6 className="flex gap-2 md:flex-row  flex-col ">
          <PiVanDuotone
            size="24"
            className=" transition-transform hover:-translate-x-2  mx-auto"
          />
          FREE SHIPPING OVERS $60
        </h6>
        <h6 className="flex gap-2 md:flex-row flex-col">
          <TbArrowsExchange2
            size="24"
            className=" transition-transform hover:-translate-x-2 mx-auto"
          />
          EASY EXCHANGES & RETURNS
        </h6>
        <h6 className="flex gap-2 md:flex-row lg:flex-row flex-col">
          <Ri24HoursLine
            size="24"
            className=" transition-transform hover:-translate-x-2 mx-auto"
          />
          24/7 FREE SUPPORT
        </h6>
      </div>
    </div>
  );
};

export default Header2;
