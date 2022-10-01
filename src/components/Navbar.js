import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./assets/logosmall.png";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img alt="Michael's Site" src={Logo} />
            </Link>
            <Link to="/">
              M. A. Smith
            </Link>
          </div>
        </div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
