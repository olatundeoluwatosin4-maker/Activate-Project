import React from 'react';
import './Topbar.css';
import logo from '../assets/logo.png';

export default function Topbar(){
  return (
    <header className="topbar">
      <div className="welcome">
        <h3>Good morning, <span className="username">Oluwatosin</span></h3>
      </div>

      <div className="top-actions">
        <div className="search">
          <input placeholder="Search items..." />
          <button>Search</button>
        </div>

        <img src={logo} alt="logo" className="topbar-logo" />
      </div>
    </header>
  );
}
