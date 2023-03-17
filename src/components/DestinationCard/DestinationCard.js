import { Link, useParams } from "react-router-dom";
import "./DestinationCard.scss";

const DestinationCard = ({ clickHandler, destination, id }) => {
  const { season, occasion, continent } = useParams();

  return (
    // <Link to={`/${season}/${occasion}/${continent}/${id}`}>
    <article
      className="destination"
      onClick={() => {
        clickHandler(destination);
      }}
    >
      <h1 className="destination__title">{destination.name}</h1>
    </article>
    // </Link>
  );
};

export default DestinationCard;
