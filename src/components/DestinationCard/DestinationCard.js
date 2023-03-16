const DestinationCard = ({ clickHandler, destination }) => {
  return (
    <article
      key={crypto.randomUUID()}
      className="destination"
      onClick={() => {
        clickHandler(destination);
      }}
    >
      <h1>{destination.name}</h1>
    </article>
  );
};

export default DestinationCard;
