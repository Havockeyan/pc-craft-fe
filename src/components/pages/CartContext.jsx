// src/components/pages/CartContext.js

import { createContext, useContext, useState } from 'react';

//  Create the context
const CartContext = createContext();

//  Create a custom hook
export const useCart = () => useContext(CartContext);

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product); // ✅ should show in console
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
