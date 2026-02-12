import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-lg rounded sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto relative flex items-center h-16">
        <div className="flex items-center ml-4">
          <img src="/src/assets/LOGO.png" alt="Logo"  className="object-cover object-center rounded w-12 h-12" />
        </div>
        <div className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
          <a href="/beranda" className="text-black hover:text-gray-300">
            Beranda
          </a>
          <a href="/coffe" className="text-black hover:text-gray-300">
            Coffe
          </a>
          <a href="/mini-soccer" className="text-black hover:text-gray-300">
            Mini Soccer
          </a>
          <a href="/about" className="text-black hover:text-gray-300">
            Tentang Kami
          </a>
        </div>
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none mr-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-green-700 p-2">
          <a
            href="/beranda"
            className="block text-white hover:text-gray-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </a>
          <a
            href="/coffe"
            className="block text-white hover:text-gray-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            Coffe
          </a>
          <a
            href="/mini-soccer"
            className="block text-white hover:text-gray-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            Mini Soccer
          </a>
          <a
            href="/about"
            className="block text-white hover:text-gray-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            Tentang Kami
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
