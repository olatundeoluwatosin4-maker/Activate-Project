import React from 'react';
import './KPICards.css';
import { FaTruck, FaShoppingBag, FaUserTie } from 'react-icons/fa';

export default function KPICards(){
  return (
    <div className="kpi-wrap">
      <div className="kpi-grid">
        <div className="kpi-card"><FaTruck className="kpi-icon"/><div>Distributions</div></div>
        <div className="kpi-card"><FaShoppingBag className="kpi-icon"/><div>Orders</div></div>
        <div className="kpi-card"><FaUserTie className="kpi-icon"/><div>Connect with Stylists</div></div>
      </div>
    </div>
  );
}
