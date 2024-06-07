import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <hr className="border-t-2 border-gray-300 my-4" />

      <footer className=" grid md:grid-cols-3 grid-cols-1 p-7  ">
        <section>
          <div className=" grid justify-around ">
            <h5 className=" font-CormorantGaramond leading-loose">
              OUR NEWSLETTER
            </h5>
            <p className=" text-sm">
              Sign up for the latest Ice offers and exclusives.
            </p>
            <div className="flex   ">
              <input
                type="text"
                className="border-gray-400 border-1 p-2 "
                placeholder="Email address"
              />
              <Link className=" bg-black ">
                <FaRegEnvelope
                  color="white"
                  size={50}
                  className="block px-2 border-2 hover:bg-[#cb8161]  "
                />
              </Link>
            </div>
            <div className="pt-12">
              <img
                src="https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2020/06/payment.png"
                alt=""
              />
            </div>{" "}
          </div>
        </section>

        <section className="flex  ">
          <div className="hidden md:block w-px h-52 bg-gray-300"></div>

          <div className="flex flex-col mx-auto pt-4 text-center">
            <h1 className=" font-CormorantGaramond">mojuri</h1>
            <br />
            <div className="flex gap-2 ">
              <Link className="text-black">
                <RiTwitterXLine
                  size={40}
                  className=" hover:bg-[#cb8161]  hover:text-white block rounded-full border-2 px-2"
                />
              </Link>
              <Link className="text-black">
                {" "}
                <RiInstagramLine
                  size={40}
                  className=" hover:bg-[#cb8161]  hover:text-white block rounded-full border-2 px-2 "
                />
              </Link>
              <Link className="text-black">
                {" "}
                <FaDribbble
                  size={40}
                  className="hover:bg-[#cb8161]  hover:text-white block rounded-full border-2 px-2"
                />
              </Link>
              <Link className="text-black">
                {" "}
                <FaBehance
                  size={40}
                  className="hover:bg-[#cb8161]  hover:text-white block rounded-full border-2 px-2"
                />
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className=" flex-col flex md:flex-row justify-around ">
            <div className="hidden md:block w-px h-52 bg-gray-300"></div>

            <div className=" w-3/5">
              <h5 className=" font-CormorantGaramond pt-7">
                CUSTOMER SERVICES
              </h5>
              <ul className=" text-sm leading-loose  font-Lato">
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Contact Us</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Track Your Order</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161] ">
                  {" "}
                  <li>Product Care & Repair</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Book an Appointment</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Frequently Asked Questions</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161] ">
                  {" "}
                  <li>Shipping & Returns</li>
                </Link>
              </ul>
            </div>

            <div>
              <h6 className=" font-CormorantGaramond pt-7 ">ABOUT US</h6>
              <ul className=" text-sm leading-loose font-Lato">
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  <li>About Us</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>FAQ</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Our Producers</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Sitemap</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Terms & Conditions</li>
                </Link>
                <Link className="no-underline text-gray-500 hover:text-[#cb8161]">
                  {" "}
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
          </div>
        </section>
      </footer>
      <hr className="border-t-2 border-gray-300 my-4 " />
      <p className="text-gray-500 text-center">
        Copyright © 2021 Mojuri Jewellery
      </p>
    </div>
  );
};

export default Footer;
