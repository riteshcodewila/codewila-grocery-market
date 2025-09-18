import React from "react";
import { Link, NavLink } from "react-router-dom";
import nav_cart_icon from "../assets/nav_cart_icon.svg";
import logo from "../assets/logo.svg"; // Logo image import
import search_icon from "../assets/search_icon.svg"; // Search icon import

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-blue-50 shadow-md relative transition-all">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}           // imported logo
          alt="WilaMart Logo"
          className="w-[157px] h-[40px] object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/" className="hover:text-primary text-gray-700">Home</NavLink>
        <NavLink to="/about" className="hover:text-primary text-gray-700">All Product</NavLink>
        <NavLink to="/contact" className="hover:text-primary text-gray-700">Contact</NavLink>

        {/* Search Box */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-white">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img
            src={search_icon}
            alt="search icon"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
          
        {/* Cart */}
        <div className="relative cursor-pointer">
          <img src={nav_cart_icon} alt="Cart" className="w-5 h-5" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {/* Login Button */}
        <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300 text-white rounded-full">
          Login
        </button>
      </div>

      {/* Hamburger Button */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg width="21" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-full left-0 w-full bg-blue-50 shadow-lg py-4 flex-col items-start gap-4 px-5 text-sm md:hidden z-10`}
      >
        <Link to="/" className="block text-gray-700 hover:text-primary">Home</Link>
        <Link to="/about" className="block text-gray-700 hover:text-primary">All Product</Link>
        <Link to="/contact" className="block text-gray-700 hover:text-primary">Contact</Link>
        
        {/* Mobile Search Box */}
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-white w-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img
            src={search_icon}
            alt="search icon"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
        
        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-primary transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;