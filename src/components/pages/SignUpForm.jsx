import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ onClose = () => {}, onLoginClick = () => {} }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate(); // For redirecting to login

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }


    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        onClose(); 
        navigate('/login'); // Redirect to login page
      } else {
        alert(data.message || 'Signup failed.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Server error. Please try again later.');
    }

    // Handle sign-up logic here
    onClose();

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


        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{' '}
          <span
            className="text-orange-400 hover:underline cursor-pointer"
            onClick={() => {
              onClose();
              onLoginClick();
              navigate('/login');
            }}
          >
            Log In
          </span>
        </p>

      </div>
    </div>
  );
};


export default SignUpForm;
