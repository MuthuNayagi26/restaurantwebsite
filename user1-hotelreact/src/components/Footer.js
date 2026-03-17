import { FaInstagram, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* First Section: Company Name & Social Media */}
        <div className="footer-section left">
          <h2 className="heading">Bliss Grand</h2>
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaFacebook className="icon" />
            <FaXTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
          <p className="heading2">Bliss Grand 2025 @ All Rights Reserved</p>
        </div>

        {/* Second Section: Our Range */}
        <div className="footer-section center">
          <h3>Our Range</h3>
          <ul>
            <li>Sweets</li>
            <li>Veg and Non veg</li>
            <li>Restaurant</li>
            <li>Bulk Orders</li>
            <li>Outdoor Catering</li>
          </ul>
        </div>

        {/* Third Section: Policies */}
        <div className="footer-section right">
          <h3>Policies</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
