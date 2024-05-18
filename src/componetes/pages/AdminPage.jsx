import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImg, setCategoryImg] = useState('');

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ecommerce-backend-fawn-eight.vercel.app/categories', {
        name: categoryName,
        img: categoryImg,
      });
      setCategoryName('');
      setCategoryImg('');
    } catch (error) {
      console.error('Category yaratishda xato', error);
    }
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <form onSubmit={handleCreateCategory}>
        <div>
          <label>Category Name:</label>
          <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        </div>
        <div>
          <label>Category Image URL:</label>
          <input type="text" value={categoryImg} onChange={(e) => setCategoryImg(e.target.value)} />
        </div>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default AdminPage;
