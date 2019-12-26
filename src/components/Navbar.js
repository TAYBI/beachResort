import React, { useState } from "react";

import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState({ IsOpen: false });
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="nav-btn">
            <FaAlignRight
              className="nav-icon"
              onClick={() => setOpen({ IsOpen: !open.IsOpen })}
            />
          </button>
        </div>
        <ul className={open.IsOpen ? "nav-links show-nav" : "nav-links"}>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/rooms">Rooms</Link>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
