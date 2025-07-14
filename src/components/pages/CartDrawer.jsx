import React, { useEffect, useState } from 'react';
import { useCart } from '../pages/CartContext';

const CartDrawer = ({ onClose }) => {
  const [slideIn, setSlideIn] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    setSlideIn(true);
  }, []);

  const handleClose = () => {
    setSlideIn(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

 
  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[₹,]/g, '')) || 0;
    return acc + price;
  }, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleClose}></div>

      <div className={`fixed top-0 right-0 h-full w-1/2 bg-white z-50 shadow-xl p-6 transform transition-transform duration-300 ease-in-out ${slideIn ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">🧾 Your Cart</h2>
          <button onClick={handleClose} className="text-gray-600 text-2xl">×</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is currently empty.</p>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            
            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Total:</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>

              <button className="w-full mt-4 bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
