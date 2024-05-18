
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Backendga so'rov yuborish
      const response = await axios.post('https://ecommerce-backend-fawn-eight.vercel.app/login', {
        username,
        password,
      });
      // Javob muvaffaqiyatli bo'lsa, admin sahifasiga yo'naltirish
      if (response.status === 200) {
        history.push('/admin');
      }
    } catch (error) {
      console.error('Login xato', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
