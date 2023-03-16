import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OccasionPage = () => {
  const { season, occasion } = useParams();
  console.log(season);
  console.log(occasion);

  return (
    <div className="occasion">
      <h1 className="occasion__title">{occasion}</h1>
      <h2 className="occasion__subtitle">Choose your occasion</h2>
      <div className="occasion__card-wrapper">
        <Link to={`/${season}/${occasion}/europe`}>
          <article className="occasion__ocasion-card">
            <h3 className="occasion__card-title">Europe</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/south-america`}>
          <article className="occasion__ocasion-card">
            <h3 className="occasion__card-title">SOUTH AMERICA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/north-america`}>
          <article className="occasion__ocasion-card">
            <h3 className="occasion__card-title">NORTH AMERICA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/oceania`}>
          <article className="occasion__ocasion-card">
            <h3 className="occasion__card-title">OCEANIA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/africa`}>
          <article className="occasion__ocasion-card">
            <h3 className="occasion__card-title">AFRICA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/asia`}>
          <article className="occasion__ocasion-card">
            <h3 className="occasion__card-title">ASIA</h3>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default OccasionPage;
