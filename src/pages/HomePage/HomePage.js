import React from "react";

import "./HomePage.scss";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const HomePage = () => {
  const url = useParams();
  console.log(url);

  return (
    <div className="home-page">
      <h1 className="home-page__title">Lets Travel</h1>
      <h2 className="home-page__subtitle">Choose your season</h2>
      <div className="home-page__card-wrapper">
        {/* { destination.filter((destination) => destination.season === season)} */}
        <Link to="/winter">
          <article className="home-page__season-card">
            <h3 className="home-page__card-title">WINTER</h3>
          </article>{" "}
        </Link>
        <Link to="/spring">
          <article className="home-page__season-card">
            <h3 className="home-page__card-title">SPRING</h3>
          </article>{" "}
        </Link>
        <Link to="/summer">
          <article className="home-page__season-card">
            <h3 className="home-page__card-title">SUMMER</h3>
          </article>{" "}
        </Link>
        <Link to="/autumn">
          <article className="home-page__season-card">
            <h3 className="home-page__card-title">AUTUMN</h3>
          </article>{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
