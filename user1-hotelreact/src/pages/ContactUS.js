import React from "react";
import "./Contactus.css";

export const ContactUS = () => {
  return (
    <div className="contact-container">
      {/* Left Section with Contact Title */}
      <div className="left-section">
        <h1 className="contact-title">Contact Us</h1>
      </div>

      {/* Right Section with Contact Details */}
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <div className="contact-text">
            <h3>CHAT TO US</h3>
            <p>Is there any queries? No worries</p>
            <p>Our friendly team is here to help.</p>
            <p className="contact-email"><strong>blissgrand@gmail.com</strong></p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div className="contact-text">
            <h3>RESTAURANT ADDRESS</h3>
            <p>You can visit us at</p>
            <p>121, P.K.N road,</p>
            <p>Sivakasi - 626123</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📞</div>
          <div className="contact-text">
            <h3>CALL TO US</h3>
            <p>Do you want Bulk orders or Outdoor catering? Call us</p>
            <p>Mon-Sun Business hours 10:00 AM - 11:00 PM</p>
            <p className="contact-phone"><strong>Ph no:+91 8220410583</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
