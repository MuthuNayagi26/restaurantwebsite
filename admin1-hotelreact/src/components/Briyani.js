import React from 'react';
import './Analytics.css';
import { Link } from 'react-router-dom';

export const Briyani = () => {
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

      <table className="table-container">
        <thead>
          <tr>
            <th>No</th>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Plain Briyani</td>
            <td>₹130</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Paneer Briyani</td>
            <td>₹180</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mushroom Briyani</td>
            <td>₹140</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Chicken Briyani</td>
            <td>₹150</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Chicken65 Briyani</td>
            <td>₹170</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Mutton Briyani</td>
            <td>₹200</td>
          </tr>
          <tr><td>7</td><td>Hyderabadi Chicken Briyani</td><td>₹180</td></tr>
            <tr><td>8</td><td>Bamboo Chicken Briyani</td><td>₹200</td></tr>
            <tr><td>9</td><td>Thalassery Chicken Briyani</td><td>₹200</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Briyani;