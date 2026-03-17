import React from 'react';
import './Analytics.css';
import { Link } from 'react-router-dom';

export const Desserts = () => {
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
        <tr><td>1</td><td>Vannila Icecream</td><td>₹60</td></tr>
            <tr><td>2</td><td>Strawberry Icecream</td><td>₹80</td></tr>
            <tr><td>3</td><td>Chocolate Icecream</td><td>₹80</td></tr>
            <tr><td>4</td><td>Blackcurrent Icecream</td><td>₹80</td></tr>
            <tr><td>5</td><td>Blueberry Icecream</td><td>₹110</td></tr>
            <tr><td>6</td><td>Butterscotch Icecream</td><td>₹100</td></tr>
            <tr><td>7</td><td>Falooda</td><td>₹170</td></tr>
            <tr><td>8</td><td>Jigarthanda</td><td>₹150</td></tr>
            <tr><td>9</td><td>Pista Kulfi</td><td>₹60</td></tr>
            <tr><td>10</td><td>Lemon Juice</td><td>₹40</td></tr>
            <tr><td>11</td><td>Orange Juice</td><td>₹70</td></tr>
            <tr><td>12</td><td>Watermelon Juice</td><td>₹70</td></tr>
            <tr><td>13</td><td>Grape Juice</td><td>₹80</td></tr>
            <tr><td>14</td><td>Pomegranate Juice</td><td>₹100</td></tr>
            <tr><td>15</td><td>Kirni Juice</td><td>₹100</td></tr>
            <tr><td>16</td><td>Oreo Milkshake</td><td>₹170</td></tr>
            <tr><td>17</td><td>Caramel Popcorn Milkshake</td><td>₹180</td></tr>
            <tr><td>18</td><td>Cold Cocoa Milkshake</td><td>₹170</td></tr>
            <tr><td>19</td><td>Elaneer Payasam</td><td>₹200</td></tr>
            <tr><td>20</td><td>Gulab Jamun[5 Pieces]</td><td>₹100</td></tr>
            <tr><td>21</td><td>Rasgulla</td><td>₹100</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Desserts;
