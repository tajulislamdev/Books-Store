import React, { useState, useEffect } from "react";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

import DarkMode from "./DarkMode"; // সঠিক path

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Best Seller", link: "/#services" },
  { id: 3, name: "Contact Us", link: "/#Contact Us" },
];

const DropdownLinks = [
  { name: "Trending Books", link: "/#" },
  { name: "Best Selling", link: "/#" },
  { name: "Contact Us", link: "/#" },
  { name: "Authors", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300">
      <div className="container mx-auto flex justify-between items-center py-3 sm:py-0">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-2xl sm:text-3xl">
          <img src={Logo} alt="Logo" className="w-10" />
          Books
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="pl-3 pr-10 py-1 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            />
            <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 dark:text-gray-300 cursor-pointer" />
          </div>

          {/* Menu Items */}
          <ul className="flex items-center gap-4">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  {menu.name}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="group relative cursor-pointer">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Quick Links{" "}
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute left-0 z-[9999] hidden w-[160px] rounded-md bg-white dark:bg-gray-800 dark:text-white p-2 shadow-lg group-hover:block">
                <ul className="space-y-2">
                  {DropdownLinks.map((data) => (
                    <li key={data.name}>
                      <a
                        href={data.link}
                        className="block w-full rounded-md px-3 py-2 hover:bg-primary/20 transition-colors"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <DarkMode />
            </li>
          </ul>

          {/* Order Button */}
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1.5 px-5 rounded-full flex items-center gap-3 shadow-md"
          >
            Order
            <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/40 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-white dark:bg-gray-900 z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {Menu.map((menu, index) => (
            <a
              key={menu.id}
              href={menu.link}
              className="text-xl font-medium hover:text-primary transition-colors duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {menu.name}
            </a>
          ))}

          <div className="flex flex-col items-center gap-2">
            <span className="text-xl font-medium">Quick Links</span>
            {DropdownLinks.map((data, index) => (
              <a
                key={data.name}
                href={data.link}
                className="text-base hover:text-primary transition-colors duration-300"
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {data.name}
              </a>
            ))}
          </div>

          <DarkMode />

          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full flex items-center gap-3"
          >
            Order
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


