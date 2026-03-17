import React from 'react';
import './Analytics.css';
import { Link } from 'react-router-dom';

export const Analytics = () => {
  return (
    <div>
      <div className="navbar">
        <div className="heading">
          <h2>BLISS GRAND</h2>
          <h3 style={{ color: '#5C3ED6', textAlign: 'center' }}>Admin Dashboard</h3>
        </div>

        <div className="module-container">
          <Link to="/mainpage" className="module"><i className="fa-solid fa-house"></i> Dashboard</Link>
          <Link to="/order-detail" className="module"><i className='bx bx-clipboard'></i> Order Detail</Link>
          <Link to="/analytics" className="module"><i className="fa-solid fa-chart-simple"></i> Analytics</Link>

          <div className="dropdown">
            <Link to="#" className="module" id="menuToggle"><i className="fa-solid fa-bars"></i> Menu</Link>
            <div className="dropdown-content">
              <Link to="/biryani">Biryani</Link>
              <Link to="/non-veg">Non-Veg</Link>
              <Link to="/veg">Veg</Link>
              <Link to="/desserts">Desserts</Link>
            </div>
          </div>
        </div>

        <div className="heading1">
          <h5>Bliss Grand Restaurant Admin Dashboard</h5>
        </div>
        <div className="heading2">
          <h6>All Rights Reserved 2025</h6>
        </div>
      </div>
      <div className="analysis">
        <img src="images\analysis.png" alt="Analytics"/>
    </div>
 </div>
  );
};

export default Analytics;