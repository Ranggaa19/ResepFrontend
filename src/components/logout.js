import React from 'react';
import axios from 'axios';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost/api/logout');
            // Hapus token dari localStorage atau state
        } catch (error) {
            console.error('Logout failed.');
        }
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
