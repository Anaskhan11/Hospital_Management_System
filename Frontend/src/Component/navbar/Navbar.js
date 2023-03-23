import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>H</span>ospital
            <span>M</span>anagement
            <span>S</span>ystem
          </h2>
        </div>
        <div className={show ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/patient">Patient</NavLink>
            </li>
            <li>
              <NavLink to="/doctor">Doctor</NavLink>
            </li>
            <li>
              <a href="####">About Us</a>
            </li>
            <li>
              <a href="#####">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#########" onClick={() => setShow(!show)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
