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
        <Link to="/africa-all" className="navbar__link">
          {" "}
          <p>AFRICA</p>{" "}
        </Link>
        <Link to="/north-america-all" className="navbar__link">
          {" "}
          <p>north-america</p>{" "}
        </Link>
        <Link to="/south-america-all" className="navbar__link">
          {" "}
          <p>south-america</p>{" "}
        </Link>
        <Link to="/europe-all" className="navbar__link">
          {" "}
          <p>europe</p>{" "}
        </Link>
        <Link to="/oceania-all" className="navbar__link">
          {" "}
          <p>oceania</p>{" "}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
