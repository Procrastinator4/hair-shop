import React from "react";

const Header = () => {
  return (
    <header>
      {/* navbar */}
      <nav className="flex flex-row justify-between px-8 py-4 fixed top-0 left-0 right-0 bg-white z-10">
        <div className="text-5xl text-green-600 items-center hover:cursor-pointer">
          Zay
        </div>
        <div className="flex list-none space-x-8 items-center">
          <li>
            <a className="text-lg hover:text-green-600" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg hover:text-green-600" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-lg hover:text-green-600" href="#shop">
              Shop
            </a>
          </li>
          <li>
            <a className="text-lg hover:text-green-600" href="#contact">
              Contact
            </a>
          </li>
        </div>
        <div className="flex  space-x-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
      </nav>
      {/* hero section  */}
      <section
        style={{
          backgroundImage: "url('/hair.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="home"
        className="min-h-[100vh] flex justify-center items-center   "
      >
        <div className="max-w-lg flex flex-col space-y-4">
          <h1 className="text-6xl text-gray-800 ">Proident Occaecat</h1>
          <p className="text-4xl text-gray-800">Ellicoip exi e commando</p>
          <span className="text-lg text-gray-700">
            You are permitted to use this theme for your personal projects but
            you should have to share this for further people to use this for
            free and improve your css.
          </span>
        </div>
      </section>
    </header>
  );
};

export default Header;
