import React from 'react';
import './Analytics.css';
import { Link } from 'react-router-dom';

export const Veg = () => {
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
            <td>1</td><td>Meals</td><td>₹130</td></tr>
            <tr><td>2</td><td>Paneer Fried Rice</td><td>₹120</td></tr>
            <tr><td>3</td><td>Paneer Noodles</td><td>₹120</td></tr>
            <tr><td>4</td><td>Veg Parotta[1 Piece]</td><td>₹15</td></tr>
            <tr><td>5</td><td>Idly[1 Piece]</td><td>₹15</td></tr>
            <tr><td>6</td><td>Podi Idly</td><td>₹70</td></tr>
            <tr><td>7</td><td>Plain Dosa</td><td>₹35</td></tr>
            <tr><td>8</td><td>Ghee Roast</td><td>₹90</td></tr>
            <tr><td>9</td><td>Podi Dosa</td><td>₹70</td></tr>
            <tr><td>10</td><td>Masala Dosa</td><td>₹100</td></tr>
            <tr><td>11</td><td>Schezwan Dosa</td><td>₹110</td></tr>
            <tr><td>12</td><td>Paneer Cheese Dosa</td><td>₹120</td></tr>
            <tr><td>13</td><td>Chappathi[1 Piece]</td><td>₹30</td></tr>
            <tr><td>14</td><td>Butter Naan[1 Piece]</td><td>₹60</td></tr>
            <tr><td>15</td><td>Veg Kothu Parotta</td><td>₹80</td></tr>
            <tr><td>16</td><td>Paneer65</td><td>₹130</td></tr>
            <tr><td>17</td><td>Gobi65</td><td>₹110</td></tr>
            <tr><td>18</td><td>Gobi Manchurian</td><td>₹130</td></tr>
            <tr><td>19</td><td>Mushroom Gravy</td><td>₹130</td></tr>
            <tr><td>20</td><td>Channa Masala</td><td>₹130</td></tr>
            <tr><td>21</td><td>Paneer Butter Masala</td><td>₹150</td>
            </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Veg;
