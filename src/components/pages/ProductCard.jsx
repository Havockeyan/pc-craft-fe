// ProductCard.jsx
import React from "react";
import { useCart } from "./CartContext"; 

const ProductCard = ({ name, price }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const newItem = {
      id: Date.now(), 
      name,
      price,
    };
    addToCart(newItem);
  };

  return (
    <div className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 p-6 rounded-xl shadow-lg border border-purple-700/30">
      <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
      <p className="text-gray-400 mb-3">{price}</p>
      <button
        onClick={handleAdd}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
