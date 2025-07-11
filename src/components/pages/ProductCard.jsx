import React from "react";

const ProductCard = ({ name, price }) => {
  return (
    <div className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 p-6 rounded-xl shadow-lg border border-purple-700/30">
      <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
      <p className="text-gray-400">{price}</p>
    </div>
  );
};

export default ProductCard;
