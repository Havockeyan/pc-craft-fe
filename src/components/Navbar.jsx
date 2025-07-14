import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/Cart.png";
import CartDrawer from "./pages/CartDrawer";


const Navbar = ({ onLoginClick }) => {
  const [isCartOpen, setisCartOpen] = useState(false);

const Navbar = ({onLoginClick,onSignUpClick}) => {
  


  const toggleCart =()=>{
    setisCartOpen(!isCartOpen);
  }
  return (
    <>
    <nav className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          PC Craft
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/Explore" className="hover:text-orange-400 transition">Explore</Link>
          
          <Link to="/Contact us" className="hover:text-orange-400 transition">Contact</Link>


          <img src={cartIcon}  alt="Cart" className="w-6 h-6 cursor-pointer" onClick={toggleCart} />
          <button
            onClick={onLoginClick}
            className="bg-orange-500 hover:bg-orange-700 px-4 py-1 rounded-lg text-sm font-semibold ml-4"
          >
            Login
          </button>
        </div>

      </div>
    </nav>
   

    {isCartOpen && <CartDrawer onClose={toggleCart} />}
    </>
  );
};


export default Navbar;
