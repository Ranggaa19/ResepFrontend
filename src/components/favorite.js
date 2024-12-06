import React, { useState } from 'react';
import axios from 'axios';

const Favorite = () => {
    const [itemName, setItemName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/favorites', { item_name: itemName }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Pastikan token disimpan setelah login
                }
            });
            console.log('Favorite added:', response.data);
        } catch (error) {
            console.error('Failed to add favorite:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" required />
            <button type="submit">Add Favorite</button>
        </form>
    );
};

export default Favorite;