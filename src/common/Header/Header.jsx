import React from "react";
import logo from "../../images/logo.png";
import { FaEnvelope, FaPhoneVolume, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="contact flex_space">
            <div className="box flex_space">
              <div className="div icons">
                <i className="fal">
                  <FaRegClock />
                </i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="div icons">
                <i className="fal">
                  <FaPhoneVolume />
                </i>
              </div>
              <div className="text">
                <h4>Call Us</h4>
                <Link to="/contact">+011 123 4567</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="div icons">
                <i className="fal">
                  <FaEnvelope />
                </i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">info@travelapp.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
