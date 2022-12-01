import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className="fa-times">{click ? <FaTimes /> : <FaBars />}</i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i>Sign-in</i>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i>Register</i>
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
