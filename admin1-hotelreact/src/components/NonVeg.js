import React from 'react';
import './Analytics.css';
import { Link } from 'react-router-dom';

export const NonVeg = () => {
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
        <tr><td>1</td><td>Chicken Fried Rice</td><td>₹120</td></tr>
            <tr><td>2</td><td>Chicken Noodles</td><td>₹120</td></tr>
            <tr><td>3</td><td>Schezwan Chicken Fried Rice</td><td>₹140</td></tr>
            <tr><td>4</td><td>Schezwan Chicken Noodles</td><td>₹140</td></tr>
            <tr><td>5</td><td>Lollipop Chicken</td><td>₹160</td></tr>
            <tr><td>6</td><td>Chicken65</td><td>₹150</td></tr>
            <tr><td>7</td><td>Non Veg Parotta</td><td>₹15</td></tr>
            <tr><td>8</td><td>Chilli Parotta</td><td>₹80</td></tr>
            <tr><td>9</td><td>Egg Kothu Parotta</td><td>₹90</td></tr>
            <tr><td>10</td><td>Grill Chicken[Half]</td><td>₹200</td></tr>
            <tr><td>11</td><td>Tandoori Chicken[Half]</td><td>₹230</td></tr>
            <tr><td>12</td><td>Barbeque Chicken[Half]</td><td>₹250</td></tr>
            <tr><td>13</td><td>Schezwan Chicken Dry</td><td>₹190</td></tr>
            <tr><td>14</td><td>Dragon Chicken</td><td>₹180</td></tr>
            <tr><td>15</td><td>Punjabi Chicken</td><td>₹180</td></tr>
            <tr><td>16</td><td>Chettinad Chicken Gravy</td><td>₹160</td></tr>
            <tr><td>17</td><td>Butter Chicken Gravy</td><td>₹160</td></tr>
            <tr><td>18</td><td>Pepper Chicken Gravy</td><td>₹160</td></tr>
            <tr><td>19</td><td>Gongura Mutton Gravy</td><td>₹220</td></tr>
            <tr><td>20</td><td>Mutton Sukka</td><td>₹200</td></tr>
            <tr><td>21</td><td>Mutton Kari Dosa</td><td>₹180</td></tr>
            <tr><td>22</td><td>Fish Gravy</td><td>₹150</td></tr>
            <tr><td>23</td><td>Fish Fry</td><td>₹100</td></tr>
            <tr><td>24</td><td>Fish Fingers</td><td>₹180</td></tr>
            <tr><td>25</td><td>Vanjaram Fry</td><td>₹150</td></tr>
            <tr><td>26</td><td>Prawn65</td><td>₹180</td></tr>
            <tr><td>27</td><td>Crab Lollipop</td><td>₹180</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default NonVeg;