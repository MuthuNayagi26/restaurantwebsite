import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  // Sync localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart
  const addToCart = (item, quantity = 1) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      // If item exists, update its quantity
      setCartItems(prevItems =>
        prevItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      // If it's a new item, add to cart with the specified quantity
      setCartItems(prevItems => [...prevItems, { ...item, quantity }]);
    }
  };

  // Increase item quantity
  const increaseQuantity = (itemName) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease item quantity and remove if it reaches zero
  const decreaseQuantity = (itemName) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Remove item from cart
  const removeFromCart = (itemName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName));
  };

  // Total item count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
