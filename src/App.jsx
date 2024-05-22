import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './componetes/pages/LoginPage';
import AdminPage from './componetes/pages/AdminPage';
import ClientPage from './componetes/pages/ClinetPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/client" element={<ClientPage />} />
      </Routes>
    </Router>
  );
}

export default App;

