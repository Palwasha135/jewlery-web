import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Thirdsection = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex  md:flex-row flex-col p-3 justify-center items-center ">
      <div className=" md:w-2/4 p-8">
        {" "}
        <div className="relative  ">
          <img
            src="https://wpbingosite.com/wordpress/mojuri/wp-content/plugins/wpbingo/lib/lookbook/images/bwp_lookbook/lookbook-1.jpg"
            alt="Look Book 1"
            className="w-full "
          />
          <div
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <button className="bg-white rounded-full p-3">
              <FaPlus />
            </button>
            {showDetails && (
              <div className="bg-white w-32  lg:w-52 absolute bottom-6 left-6 mt-2 ml-2">
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
                        src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/05/1.jpg"
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
                        Bold Hoops
                      </Link>
                    </div>
                    <div className="text-[#cb8161]">$120.00</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="m-auto text-center">
        <h1 className="text-4xl text-[#cb8161]">Curated by color</h1>
        <p>Brighten up your look with vibrant gemstone jewelry.</p>
        <button className="px-5 text-white py-2 bg-[#cb8161] hover:animate-wobble">
          SHOP NOW
        </button>
      </section>
    </div>
  );
};

export default Thirdsection;
