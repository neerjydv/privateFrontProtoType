import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Add your navigation links here */}
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/CheckPNR">PNR Status</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;