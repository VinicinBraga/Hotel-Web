import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="meni-icon">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </div>
          <ul className="nav-menu active">
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/destination">Destination</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/testimonial">Testimonial</Link>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="login-area flex">
            <li>
              <Link to="/sing-in">
                <i className="fa fa-chevron-right">Sing-in</i>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i classname="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn button">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
