import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 text-white bg-gradient-to-br from-purple-900 via-black to-purple-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-xl border border-purple-700/20">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">Contact Us</h2>

        <form className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
