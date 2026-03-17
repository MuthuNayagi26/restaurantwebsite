// src/pages/OrderDetail.js
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./OrderDetail.css";

export const OrderDetail = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/orders");
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    if (orders.length === 0) {
        return <p>No order details available.</p>;
    }

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
                        <th>Customer Name</th>
                        <th>Delivery Address</th>
                        <th>Contact No</th>
                        <th>Order Date & Time</th>
                        <th>Items</th>
                        <th>Payment Mode</th>
                        <th>Special Note</th>
                        <th>Location</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.name}</td>
                            <td>{order.address}</td>
                            <td>{order.contact}</td>
                            <td>{order.orderDate}</td>
                            <td>
                                {order.items && order.items.length > 0 ? (
                                    order.items.map((item, idx) => (
                                        <div key={idx}>
                                            {item.name} - {item.quantity} pcs
                                        </div>
                                    ))
                                ) : (
                                    <span>No items</span>
                                )}
                            </td>
                            <td>{order.paymentMode}</td>
                            <td>{order.note || "N/A"}</td>
                            <td>{order.location}</td>
                            <td>₹{order.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetail;
