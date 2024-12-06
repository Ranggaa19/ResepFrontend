import React, { useEffect, useState } from "react";
import '../App.css'; // Mengimpor CSS dari folder src

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:8000/api/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setFavorites(data);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="app-container">
      <div className="favorites-container">
        <h2>Your Favorite Items</h2>
        {favorites.length === 0 ? (
          <p>You have no favorite items yet.</p>
        ) : (
          <ul>
            {favorites.map((item) => (
              <li key={item.id}>
                <span>{item.item_name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;
