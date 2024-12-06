import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost8000/api', // Ganti dengan URL API backend Laravel Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
