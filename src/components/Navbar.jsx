import React from 'react';
import logo from '../assets/pc_craft_logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 text-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10" />
        <h1 className="font-bold text-lg">PC CRAFT</h1>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#" className="hover:text-orange-400 transition-colors duration-200">Home</a>
        <a href="#" className="hover:text-orange-400 transition-colors duration-200">Explore</a>
        <a href="#" className="hover:text-orange-400 transition-colors duration-200">Contact us</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-orange-800 hover:bg-orange-500 px-4 py-1.5 text-sm rounded-xl transition-colors duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
