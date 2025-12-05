import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png';
import { FaHome, FaTruck, FaHeart, FaWallet, FaUser, FaHeadset } from 'react-icons/fa';


export default function SideBar(){
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src={logo} alt="logo" className="brand-logo" />
        <h2>Fabrics</h2>
      </div>

      <nav className="nav">
        <ul>
          <li className="active"><FaHome/> <span>Dashboard</span></li>
          <li><FaTruck/> <span>Distribution</span></li>
          <li><FaHeart/> <span>Saved Items</span></li>
          <li><FaWallet/> <span>Wallet</span></li>
          <li><FaUser/> <span>Profile</span></li>
          <li><FaHeadset/> <span>Support</span></li>
        </ul>
      </nav>

      <button className="logout-btn">Log out</button>
    </aside>
  );
}
