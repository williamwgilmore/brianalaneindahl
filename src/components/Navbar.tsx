import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="pageNavbar" className="homeBackground">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
      <Link to="/papers" className="nav-item">
        Papers
      </Link>
    </div>
  );
};
