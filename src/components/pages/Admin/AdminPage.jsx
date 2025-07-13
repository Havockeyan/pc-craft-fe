// src/pages/Admin/AdminPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your real backend endpoint
      await axios.post('http://localhost:5000/api/admin/add-item', item);
      alert('Item added successfully!');
      setItem({ name: '', description: '', price: '', category: '', image: '' });
    } catch (err) {
      alert('Error adding item');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Admin Panel – Add Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input name="name" placeholder="Item Name" value={item.name} onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
        <textarea name="description" placeholder="Description" value={item.description} onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
        <input name="price" type="number" placeholder="Price" value={item.price} onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
        <input name="category" placeholder="Category" value={item.category} onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
        <input name="image" placeholder="Image URL" value={item.image} onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
        <button type="submit" className="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
