import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Kategoriya olishda xato', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Client Page</h2>
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <img src={category.img} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
