import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white grid grid-cols-3 px-16 py-8  w-[99] text-center"
      id="contact"
    >
      <div className="space-y-4">
        <h1 className="text-2xl text-green-600 hover:text-green-700 cursor-pointer">
          Zay Shop
        </h1>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          123 Lahore
        </p>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          010-2234-234
        </p>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          info@gmail.com
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl text-green-600 hover:text-green-700 cursor-pointer">
          Products
        </h1>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          Luxury
        </p>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          Sports Wear
        </p>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          Men's Shoes
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl text-green-600 hover:text-green-700 cursor-pointer">
          Further Info
        </h1>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          Home
        </p>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          Shop
        </p>
        <p className="hover:text-gray-300 cursor-pointer hover:underline">
          Contact Us
        </p>
      </div>
    </footer>
  );
};

export default Footer;
