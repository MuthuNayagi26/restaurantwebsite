import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";  // Import CartContext
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { cartCount } = useContext(CartContext);  // Get cartCount from context

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <h1 className="navbar-brand">Bliss Grand</h1>
      <div className="navbar-center">
        <Link to="/">Home</Link> {/* Navigate to Home */}

        <div className="dropdown">
          <a href="#menu" id="menuToggle" onClick={toggleDropdown}>
            Menu ▼
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/briyani">Biryani</Link>
              <Link to="/nonveg">Non-Veg</Link>
              <Link to="/veg">Veg</Link>
              <Link to="/desserts">Desserts</Link>
            </div>
          )}
        </div>

        <Link to="/about">About Us</Link> {/* Navigate to About Us */}
      </div>

      <div className="navbar-right">
        <Link to="/cart" className="nav-item cart-icon">
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          <span>Cart</span>
        </Link>
        <Link to="/contact" className="nav-item">
          <FaUser /> <span>Contact us</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
