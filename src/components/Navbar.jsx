import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          PC Craft
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/Explore" className="hover:text-orange-400 transition">Explore</Link>
          
          <Link to="/Contact us" className="hover:text-orange-400 transition">Contact</Link>

          <button
            onClick={onLoginClick}
            className="bg-orange-500 hover:bg-orange-700 px-4 py-1 rounded-lg text-sm font-semibold ml-4"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
