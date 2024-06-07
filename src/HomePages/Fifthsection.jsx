import React from "react";

const Fifthsection = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <section className="md:p-14 pt-16 p-5">
        <h1 className="md:text-4xl text-[#cb8161]">It started with love</h1>
        <p>
          Behind our 15-year success is our panel of expert jewellers who have
          been scouring the entire globe in pursuit of the best and most
          stunning jewellery that can be offered at affordable price for you.
        </p>
        <p>
          Visit our online catalogue and shop for the finest earrings, rings,
          bracelets, watches, silver, and the most luxurious gemstones.
        </p>
        <button className="px-5  text-white py-2 bg-[#cb8161] hover:animate-wobble">
          ABOUT US
        </button>
      </section>
      <div className=" md:w-4/5 p-8">
        {" "}
        <div className="relative">
          <img
            src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/img-3.jpg"
            alt=""
            className="w-full hover:animate-wobble"
          />
        </div>
      </div>
    </div>
  );
};

export default Fifthsection;
