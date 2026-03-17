// src/pages/PlaceOrder.js
import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PlaceOrder.css";

export const PlaceOrder = () => {
    const { getTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();
    const totalAmount = getTotalPrice();
    const deliveryFee = 0;
    const finalAmount = totalAmount + deliveryFee;

    const [orderDetails, setOrderDetails] = useState({
        name: "",
        address: "",
        contact: "",
        note: "",
        location: "home",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails({ ...orderDetails, [name]: value });
    };

    const placeOrder = async () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const orderData = {
            ...orderDetails,
            items: cartItems.map(item => ({
                name: item.name,
                quantity: item.quantity,
            })),
            paymentMode: "Cash on Delivery",
            totalAmount: finalAmount,
            orderDate: new Date().toLocaleString(),
        };

        try {
            await axios.post("http://localhost:5000/api/orders", orderData);
            alert("Order placed successfully!");
            navigate("/order-success");
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place the order. Please try again.");
        }
    };

    return (
        <div className="containerneworder1">
            {/* Background Image */}
            <img
                src="images/order.jpg"
                alt="Hotel View"
                height="1000"
                width="1520"
                style={{ opacity: 0.9 }}
            />

            <div className="center-boxorder1">
                <div className="loginorder1">
                    <h3>Enter Complete Address</h3>
                </div>

                <div className="box-contentorder1">
                    <h3>Name</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={orderDetails.name}
                        onChange={handleInputChange}
                        required
                    />

                    <h3>Address</h3>
                    <textarea
                        name="address"
                        placeholder="Enter your complete address"
                        value={orderDetails.address}
                        onChange={handleInputChange}
                        required
                    ></textarea>

                    <h3>Contact No</h3>
                    <input
                        type="tel"
                        name="contact"
                        placeholder="Enter your contact number"
                        value={orderDetails.contact}
                        onChange={handleInputChange}
                        required
                    />

                    <h3>Payment Mode</h3>
                    <input
                        type="text"
                        value="Cash on Delivery"
                        readOnly
                        className="readonly-field"
                    />

                    <h3>Add a Note for the Restaurant</h3>
                    <textarea
                        name="note"
                        placeholder="Any special request?"
                        value={orderDetails.note}
                        onChange={handleInputChange}
                    ></textarea>

                    <h3>Delivery Location</h3>
                    <label>
                        <input
                            type="radio"
                            name="location"
                            value="home"
                            checked={orderDetails.location === "home"}
                            onChange={handleInputChange}
                        /> Home
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="location"
                            value="office"
                            checked={orderDetails.location === "office"}
                            onChange={handleInputChange}
                        /> Office
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="location"
                            value="others"
                            checked={orderDetails.location === "others"}
                            onChange={handleInputChange}
                        /> Others
                    </label>

                    <h3>Total Bill</h3>
                    <p><b>₹{finalAmount} (Delivery Fee: Free)</b></p>

                    <div className="button-containerorder1">
                        <button type="button" className="ok-btnorder1" onClick={placeOrder}>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Box */}
            <div className="red-box">
                <div className="slogan">
                    <b><center>150+</center></b>
                    <br />Veg and Non-Veg Dishes
                </div>
                <div className="slogan">
                    <b><center>15+</center></b>
                    <br />Years of Legacy
                </div>
                <div className="slogan">
                    <b><center>1000+</center></b>
                    <br />Happy Customers
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
