import { useState } from "react";
import { useParams } from "react-router-dom";
import DestinationCard from "../../components/DestinationCard/DestinationCard";

import json from "../../data/destination.json";

const DestinationsPage = () => {
  const { season, destination, occasion, dea } = useParams();

  const [destinations, setDestinations] = useState(json);
  // const [modalIsShown, setModalIsShown] = useState(false);

  const [currentDestination, setCurrentDestination] = useState(null);

  const clickHandler = (destination) => {
    // setModalIsShown(true);
    setCurrentDestination(destination);
  };

  return (
    <div className="destinations">
      <h1 className="destinations__title">{destination}</h1>
      <h2 className="destinations__subtitle">Choose your destination</h2>
      <div className="destinations__card-wrapper"></div>

      {destinations.map((destination) => {
        return (
          <DestinationCard
            // key={randomUUId()}
            clickHandler={clickHandler}
            destination={destination}
          />
        );
      })}

      {currentDestination && (
        <div className="modal">
          <p className="ptag">{currentDestination.name}</p>
        </div>
      )}
    </div>
  );
};

export default DestinationsPage;
