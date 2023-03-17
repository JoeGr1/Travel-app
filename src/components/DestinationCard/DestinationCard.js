import { Link, useParams } from "react-router-dom";
import "./DestinationCard.scss";

const DestinationCard = ({ clickHandler, destination }) => {
  const { season, occasion, continent } = useParams();

  return (
    <article
      className="destination"
      onClick={() => {
        clickHandler(destination);
      }}
    >
      <h1 className="destination__title">{destination.name}</h1>
    </article>
  );
};

export default DestinationCard;
