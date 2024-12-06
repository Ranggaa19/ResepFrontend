import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Mengimpor CSS

import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites'; // Pastikan ada halaman Favorit

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* Route untuk halaman lainnya */}
      </Routes>
    </Router>
  );
};

export default App;
