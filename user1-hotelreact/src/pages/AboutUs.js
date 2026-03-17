// AboutUs.js
import React from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="container">
      <img src="/images/hotel3.jpg" alt="Hotel" height="auto" width="100%" />
      <div className="top-left"><b>Welcome to Bliss Grand</b></div>

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="about-para">
          <p>
            The <span className="highlight">House of Bliss Grand</span> was established in 2000 in Sivakasi, with a
            great dream to spread the magic of choicest homemade recipes across India. Our journey and dream are
            fulfilling, as Sivakasi savours the array of our delightful flavours for over 2 decades, and continues to do
            so. The widespread patronage it has been assuring us of our commitment in providing quality products over
            time. Our countless combination of ingredients and imagination bring in the best of sweets one can fancy,
            making it a delight to savour the taste and freshness of <span className="highlight">Bliss Grand</span>{" "}
            authentic dishes.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AboutUs; 