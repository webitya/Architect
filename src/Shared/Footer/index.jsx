import React from "react";
import "./Footer.css";
import "animate.css";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const display = (
    <>
      <hr className="footer-divider" />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-title">Architect Chadda Associates</h2>
            <p className="footer-description">Leading architectural firm delivering modern solutions.</p>
          </div>
          <div className="footer-links">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/">ABOUTUS</Link></li>
            <li><Link to="/">OUR PROJECTS</Link></li>
            <li><Link to="/">SERVICES</Link></li>
            <li><Link to="/">CONTACT US</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="footer-subtitle">Contact</h3>
            <p className="footer-contact-info">407, 4th Floor, XYZ Building, Ranchi, Jharkhand</p>
            <p className="footer-contact-info">Email: info@chaddaassociates.com</p>
          </div>
        </div>
        {/* ========================== */}
        <div className="footer-after grid md:grid-cols-3 items-center">
          <div className="social-icons">
            <a href="#" className="icon facebook">
              <FacebookOutlined />
            </a>
            <a href="#" className="icon youtube">
              <YoutubeOutlined />
            </a>
            <a href="#" className="icon instagram">
              <InstagramOutlined />
            </a>
            <a href="#" className="icon twitter">
              <TwitterOutlined />
            </a>
            <a href="#" className="icon linkedin">
              <LinkedinOutlined />
            </a>
          </div>
          <div className="stay-connected">
            <h3 className="stay-connected-title">Stay Connected</h3>
            <form className="subscription-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="call-button">
            <a href="tel:+1234567890">Call Us</a>
          </div>
        </div>
        {/* ======================= */}
        <div className="footer-bottom">
          <p>© 2024 Architect Chadda Associates. All rights reserved.</p>
        </div>
      </footer>
    </>

  );
  return display
};

export default Footer;
