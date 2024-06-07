import React, { useState, useEffect } from "react";
 import { IoIosArrowUp } from "react-icons/io";
const Faqpage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#fff] items-center justify-center mt-32 ">
      <h1 className="text-center  sm:text-4xl  md:text-6xl  font-CormorantGaramond">
        Frequently Asked Questions.
      </h1>
      <div className="grid md:grid-cols-2 gap-6 justify-center items-center mt-20  m-10">
        {/* 1st col */}
        <div className="">
          <h1 className=" font-CormorantGaramond text-4xl  mb-10">
            01. The order
          </h1>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When do I receive my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When placing the order, a day of shipment is indicated. After the
            order has been placed, the same delivery time will also be stated on
            the order confirmation. It is therefore never possible that during
            the order, the shipping day on the website, is different than on the
            order confirmation.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            I now see the longer delivery time of (a part of) my order. How can
            I cancel it?
          </h2>
          <p className="text-[#969696] mb-8">
            If the order has a longer delivery time than you had previously
            seen, it is of course possible to cancel (a part of) the order. For
            this you can contact our customer service. They will cancel the
            order for you. The purchase amount will be back on your bank account
            within two working days. When an order has already been shipped, it
            can no longer be cancelled.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When will I receive the invoice for my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When you have paid for the order, you will not automatically receive
            an invoice for your order. If you wish to receive an invoice, this
            can be done in two ways.The first way is through your account at our
            store. When you log in to your account you can see your orders and
            download the invoice.
          </p>
        </div>
        {/* 2nd col */}
        <div>
          <h1 className=" font-CormorantGaramond text-4xl  mb-10">
            02. Shipment
          </h1>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When do I receive my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When placing the order, a day of shipment is indicated. After the
            order has been placed, the same delivery time will also be stated on
            the order confirmation. It is therefore never possible that during
            the order, the shipping day on the website, is different than on the
            order confirmation.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            I now see the longer delivery time of (a part of) my order. How can
            I cancel it?
          </h2>
          <p className="text-[#969696] mb-8">
            If the order has a longer delivery time than you had previously
            seen, it is of course possible to cancel (a part of) the order. For
            this you can contact our customer service. They will cancel the
            order for you. The purchase amount will be back on your bank account
            within two working days. When an order has already been shipped, it
            can no longer be cancelled.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When will I receive the invoice for my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When you have paid for the order, you will not automatically receive
            an invoice for your order. If you wish to receive an invoice, this
            can be done in two ways.The first way is through your account at our
            store. When you log in to your account you can see your orders and
            download the invoice.
          </p>
        </div>
        {/* 2nd row 1st col */}
        <div>
          <h1 className=" font-CormorantGaramond text-4xl  mb-10">
            03. The order
          </h1>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When do I receive my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When placing the order, a day of shipment is indicated. After the
            order has been placed, the same delivery time will also be stated on
            the order confirmation. It is therefore never possible that during
            the order, the shipping day on the website, is different than on the
            order confirmation.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            I now see the longer delivery time of (a part of) my order. How can
            I cancel it?
          </h2>
          <p className="text-[#969696] mb-8">
            If the order has a longer delivery time than you had previously
            seen, it is of course possible to cancel (a part of) the order. For
            this you can contact our customer service. They will cancel the
            order for you. The purchase amount will be back on your bank account
            within two working days. When an order has already been shipped, it
            can no longer be cancelled.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When will I receive the invoice for my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When you have paid for the order, you will not automatically receive
            an invoice for your order. If you wish to receive an invoice, this
            can be done in two ways.The first way is through your account at our
            store. When you log in to your account you can see your orders and
            download the invoice.
          </p>
        </div>
        {/* 2nd row 2nd col */}
        <div>
          <h1 className=" font-CormorantGaramond text-4xl  mb-10">
            04. Returns, exchanges and complaints
          </h1>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When do I receive my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When placing the order, a day of shipment is indicated. After the
            order has been placed, the same delivery time will also be stated on
            the order confirmation. It is therefore never possible that during
            the order, the shipping day on the website, is different than on the
            order confirmation.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            I now see the longer delivery time of (a part of) my order. How can
            I cancel it?
          </h2>
          <p className="text-[#969696] mb-8">
            If the order has a longer delivery time than you had previously
            seen, it is of course possible to cancel (a part of) the order. For
            this you can contact our customer service. They will cancel the
            order for you. The purchase amount will be back on your bank account
            within two working days. When an order has already been shipped, it
            can no longer be cancelled.
          </p>
          <h2 className="text-lg  font-Lato font-bold text-gray-600 mb-8">
            When will I receive the invoice for my order?
          </h2>
          <p className="text-[#969696] mb-8">
            When you have paid for the order, you will not automatically receive
            an invoice for your order. If you wish to receive an invoice, this
            can be done in two ways.The first way is through your account at our
            store. When you log in to your account you can see your orders and
            download the invoice.
          </p>
        </div>
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="z-10 fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-[#cb8161] text-white  focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Faqpage;