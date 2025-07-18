import React, { useState } from 'react';
import axios from 'axios';
import { getApiDomain } from '../../apiDomain';

const SignUpForm = ({ onClose, onLoginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post(`${getApiDomain()}/api/users/signup`, {
        username: name,
        email,
        password,
        phone: "" // Add phone as required by API doc, can be empty or add a phone field if you want
      });
      // According to API doc, tokens are in response.data.accessToken and response.data.refreshToken
      if (response.data.accessToken && response.data.refreshToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        onClose();
      } else {
        // throw new Error('Tokens not found');
      }
    } catch (error) {
      // API doc: error is in error.response.data.error
      alert(error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-400 hover:text-orange-400 w-full text-center"
        >
          Cancel
        </button>
        {onLoginClick && (
          <p className="mt-4 text-sm text-center text-gray-400">
            Already have an account?{' '}
            <span
              className="text-orange-400 hover:underline cursor-pointer"
              onClick={() => {
                onClose(); // Close Sign Up
                onLoginClick(); // Open Login
              }}
            >
              Log In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;