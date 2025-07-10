import React from 'react';
import logo from '../assets/pc_craft_logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({onLoginClick}) => {
  

  return (
    <nav className="flex justify-between items-center px-6 py-4 text-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10" />
        <h1 className="font-bold text-lg">PC CRAFT</h1>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm">
        <Link to='/' className="hover:text-orange-400 transition-colors duration-200">Home</Link>
        <Link to='/Explore' className="hover:text-orange-400 transition-colors duration-200">Explore</Link>
        <Link to='/Contact us'className="hover:text-orange-400 transition-colors duration-200">Contact us</Link>
      </div>


      <div className="flex items-center gap-4">
        <input
        type="text" placeholder="search...."  className="px-3 py-1.5 rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-orange-500" />
        <button onClick={onLoginClick} className="bg-orange-500 hover:bg-orange-700 px-4 py-1.5 text-sm rounded-xl transition-colors duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
