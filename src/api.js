import axios from 'axios';

// Mengambil URL API dari environment variable
const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl,  // Menetapkan base URL API
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: true,  // Untuk mengirimkan cookie yang diperlukan (jika menggunakan autentikasi berbasis cookie)
});

// Contoh request API untuk mendapatkan data user
export const getUser = async () => {
  try {
    const response = await api.get('/api/user');  // Endpoint API di backend
    return response.data;
  } catch (error) {
    console.error('API error: ', error);
  }
};

export default api;
