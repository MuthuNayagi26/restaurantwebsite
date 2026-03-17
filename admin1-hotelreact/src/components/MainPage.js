import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    return (
        <div>
            <div className="navbar">
                <div className="heading">
                    <h2>BLISS GRAND</h2>
                    <h3 style={{ color: '#5C3ED6', textAlign: 'center' }}>Admin Dashboard</h3>
                </div>

                <div className="module-container">
                    <Link to="/MainPage" className="module"><i className="fas fa-house"></i> Dashboard</Link>
                    <Link to="/order-detail" className="module"><i className="bx bx-clipboard"></i> Order Detail</Link>
                    <Link to="/analytics" className="module"><i className="fas fa-chart-simple"></i> Analytics</Link>
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

            <div className="dashboard">
                <div className="hello">
                    <h2>Hi Bliss Grand, Welcome back to Admin Dashboard</h2>
                </div>

                <div className="card">
                    <img src="images/nooforders.jpg" alt="Total Orders" className="images" width="100" height="100" />
                    <div className="card-content">
                        <h1>80</h1>
                        <p>Total Orders</p>
                    </div>
                </div>

                <div className="card">
                    <img src="images/delivered.jpg" alt="Total Delivered" className="images" width="100" height="100" />
                    <div className="card-content">
                        <h1>230</h1>
                        <p>Total Delivered</p>
                    </div>
                </div>

                <div className="card">
                    <img src="images/cancelledorderes.webp" alt="Total Cancelled" className="images" width="100" height="100" />
                    <div className="card-content">
                        <h1>30</h1>
                        <p>Total Cancelled</p>
                    </div>
                </div>

                <div className="card">
                    <img src="images/revenue.png" alt="Total Revenue" className="images" width="100" height="100" />
                    <div className="card-content">
                        <h1>Rs. 11,500</h1>
                        <p>Total Revenue</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
