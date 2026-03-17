//Cart.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CartContext } from "../CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} width="100" height="90" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                <p>⭐ {item.ratings} ratings</p>
              </div>
              <div className="cart-controls">
                <button className="qty-btn" onClick={() => decreaseQuantity(item.name)}>-</button>
                <span>{item.quantity}</span>
                <button className="qty-btn" onClick={() => increaseQuantity(item.name)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          ))}
          <h3 className="total-price">Total: ₹{getTotalPrice()}</h3>
          <button className="proceed-btn" onClick={() => navigate("/place-order")}>PROCEED TO ORDER</button>

        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
