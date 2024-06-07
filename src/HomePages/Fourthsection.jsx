import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Fourthsection = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="flex justify-center items-center md:flex-row flex-col ">
      <section className="m-auto text-center pt-12">
        <h1 className="md:text-4xl text-[#cb8161]">Make the connection</h1>
        <p>Introducing your outfit’s missing link.</p>
        <button className="px-5  text-white py-2 bg-[#cb8161] hover:animate-wobble">
          SHOP NOW
        </button>
      </section>
      <div className=" md:w-2/4 p-8">
        {" "}
        <div className="relative">
          <img
            src="https://wpbingosite.com/wordpress/mojuri/wp-content/plugins/wpbingo/lib/lookbook/images/bwp_lookbook/0_lookbook-2.jpg"
            alt="Look Book 1"
            className="w-full"
          />
          <div
            className="absolute top-2/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <button className="bg-white rounded-full p-3">
              <FaPlus />
            </button>
            {showDetails && (
              <div className="bg-white w-32 md:w-52 absolute bottom-6 right-8 mt-2 ml-2">
                <div
                  className={`content-lookbook bg-white ${
                    showDetails ? "block" : "hidden"
                  }`}
                  style={{ left: "44", bottom: "10px" }}
                >
                  <div className="item-thumb">
                    <Link href="https://wpbingosite.com/wordpress/mojuri/shop/bold-hoops/">
                      <img
                        className=" w-72"
                        src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/05/2.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="text-center ">
                    <div>
                      <Link
                        className="  text-black no-underline"
                        href="https://wpbingosite.com/wordpress/mojuri/shop/bold-hoops/"
                      >
                        Twin Hoops
                      </Link>
                    </div>
                    <div className="text-[#cb8161]">$60.00</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthsection;
