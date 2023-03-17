import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import { v4 as uuid } from "uuid";
import axios from "axios";
import "./DestinationsPage.scss";
import json from "../../data/destination.json";
import Modal from "../../components/Modal/Modal";

const DestinationsPage = () => {
  const { season, continent, occasion, countryId } = useParams();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [destinations, setDestinations] = useState(json);
  const [currentDestination, setCurrentDestination] = useState(null);

  // GET  REQUEST
  const getDestinations = async () => {
    const { data } = await axios.get(`${BACKEND_URL}/destinations`);
    setDestinations(data);
  };

  useEffect(() => {
    try {
      getDestinations();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const clickHandler = (destination) => {
    setCurrentDestination(destination);
  };

  //add condtioning for api call (loading )

  const filteredDestinations = destinations.filter((destination) => {
    if (
      destination.season === season &&
      destination.occasion === occasion &&
      destination.continent === continent
    ) {
      return true;
    }
  });

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="destinations">
      <h2 className="season__btn-back" onClick={handleClick}>
        GO BACK
      </h2>
      <h1 className="destinations__title">{continent}</h1>
      <h2 className="destinations__subtitle">Choose your destination</h2>
      <div className="destinations__card-wrapper">
        {filteredDestinations.map((destination) => {
          const id = destination.id;
          return (
            <Link to={`/${season}/${occasion}/${continent}/${id}`}>
              <DestinationCard
                key={uuid()}
                clickHandler={clickHandler}
                destination={destination}
                id={destination.id}
              />
            </Link>
          );
        })}
      </div>

      {currentDestination && <Modal destination={currentDestination} />}
    </div>
  );
};

export default DestinationsPage;
