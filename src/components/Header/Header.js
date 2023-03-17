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
        <div className="navbar__wrap">
          <Link to="/africa-all" className="navbar__link">
            {" "}
            <p>AFRICA</p>{" "}
          </Link>
          <Link to="/north-america-all" className="navbar__link">
            {" "}
            <p>NORTH-AMERICA</p>{" "}
          </Link>
          <Link to="/south-america-all" className="navbar__link">
            {" "}
            <p>SOUTH-AMERICA</p>{" "}
          </Link>
          <Link to="/europe-all" className="navbar__link">
            {" "}
            <p>EUROPE</p>{" "}
          </Link>
          <Link to="/oceania-all" className="navbar__link">
            {" "}
            <p>OCEANIA</p>{" "}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
