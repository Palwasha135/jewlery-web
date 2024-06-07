import React from "react";
import contactbg from "../Assets/contactbg.jpg";

const ContactForm = () => {
  return (
    <div className="mt-20">
      <section
        className="body-font relative"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-5 py-16 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-black font-bold text-4xl md:text-5xl lg:text-6xl mb-8 ">
              Send Us Your Questions!
            </h1>
            <p className="text-gray-600 md:text-lg lg:text-xl xl:w-2/3 mx-auto leading-relaxed  mb-10">
              We’ll get back to you within two days.
            </p>
          </div>
          <form action="https://fabform.io/f/{form-id}" method="post">
            <div className="mx-auto md:px-10 lg:px-0 xl:px-20">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full md:w-1/2 lg:p-4">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base text-black"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border border-black text-lg outline-none py-3 px-3 mt-3"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2 lg:p-4">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-base text-black"
                    >
                      Full Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-black text-lg outline-none py-3 px-3 mt-3"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-base text-black"
                    >
                      Full Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full h-72 border border-black text-lg outline-none mt-3"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-black border-0 py-3 px-14 focus:outline-none hover:bg-[#cb8161] rounded text-base">
                    S U B M I T
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;