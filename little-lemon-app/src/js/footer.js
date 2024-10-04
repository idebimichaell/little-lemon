import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="./logo.png" alt="Restaurant logo" />
      </div>
      <nav className="footer-nav">
        <ul>
          <li>
            <h3>Doormat Navigation</h3>
          </li>
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#specials">Specials</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <div className="social-media-links">
        <h3>Social Media Links</h3>
        <a href="./#">Facebook</a>
        <a href="./#">Twitter</a>
        <a href="./#">Instagram</a>
        <a href="./#">TikTok</a>
      </div>
      <div className="contact-info">
        <h3>Contact</h3>
        <p>123 Main Street, City, Country</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@restaurant.com</p>
      </div>
    </footer>
  );
}

export default Footer;
