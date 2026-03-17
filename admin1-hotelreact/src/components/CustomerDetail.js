import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomerDetail.css';

export const CustomerDetail = () => {
  const [customerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderDetails")) || [];
    const customerInfo = storedOrders.map((order, index) => ({
      customerName: order.customerName,
      address: order.address,
      contactNo: order.contactNo,
    }));
    setCustomerDetails(customerInfo);
  }, []);

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
          <Link to="/customer-detail" className="module"><i className="fa-solid fa-user"></i> Customer Detail</Link>
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
            <th>Customer Address</th>
            <th>Contact No</th>
          </tr>
        </thead>
        <tbody>
          {customerDetails.length === 0 ? (
            <tr>
              <td colSpan="6">No customer data found.</td>
            </tr>
          ) : (
            customerDetails.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.contact}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDetail;
