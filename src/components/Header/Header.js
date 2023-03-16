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
      </nav>
    </>
  );
};

export default Header;
