import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">Michael's Site</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
