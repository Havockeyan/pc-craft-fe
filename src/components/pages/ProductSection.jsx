import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ProductCard key={i} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
