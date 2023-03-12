import React from "react";

import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src="#" alt="Logo" className="navbar__logo" />
        </Link>
        <ul className="navbar__link-list">
          <Link to="/1" className="navbar__link">
            Page1
          </Link>
          <Link to="/2" className="navbar__link">
            Page2
          </Link>
          <Link to="/3" className="navbar__link">
            Page3
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
