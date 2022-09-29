import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import About from "./pages/About"
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">Michael's Site</Link>
        </div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
