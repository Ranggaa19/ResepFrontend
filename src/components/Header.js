import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <a href="Login">Login</a>
        <a href="Register">Register</a>
        <a href="Favorite">Favorites</a>
      </nav>
    </header>
  );
};

export default Header;