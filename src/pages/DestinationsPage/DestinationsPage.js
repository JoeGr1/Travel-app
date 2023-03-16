import { useState } from "react";
import { useParams } from "react-router-dom";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import { v4 as uuid } from "uuid";

import json from "../../data/destination.json";

const DestinationsPage = () => {
  const { season, continent, occasion, countryId } = useParams();

  const [destinations, setDestinations] = useState(json);
  const [currentDestination, setCurrentDestination] = useState(null);

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

  return (
    <div className="destinations">
      <h1 className="destinations__title">{continent}</h1>
      <h2 className="destinations__subtitle">Choose your destination</h2>
      <div className="destinations__card-wrapper"></div>

      {filteredDestinations.map((destination) => {
        return (
          <DestinationCard
            key={uuid()}
            clickHandler={clickHandler}
            destination={destination}
            id={uuid()}
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
