import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__link">
          <img src={logo} alt="Logo" className="navbar__logo" />
          <h3 className="navbar__title">WANDERLY</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
