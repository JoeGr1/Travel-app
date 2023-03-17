import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./OccasionPage.scss";

const OccasionPage = () => {
  const { season, occasion } = useParams();
  console.log(season);
  console.log(occasion);

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="occasion">
      <h2 className="season__btn-back" onClick={handleClick}>
        GO BACK
      </h2>
      <h1 className="occasion__title">{occasion}</h1>
      <h2 className="occasion__subtitle">Choose prefered continent</h2>
      <div className="occasion__card-wrapper">
        <Link to={`/${season}/${occasion}/europe`}>
          <article className="occasion__continent-card occasion__continent-card--europe">
            <h3 className="occasion__card-title">EUROPE</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/south-america`}>
          <article className="occasion__continent-card occasion__continent-card--south-america">
            <h3 className="occasion__card-title">SOUTH AMERICA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/north-america`}>
          <article className="occasion__continent-card occasion__continent-card--north-america">
            <h3 className="occasion__card-title">NORTH AMERICA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/oceania`}>
          <article className="occasion__continent-card occasion__continent-card--oceania">
            <h3 className="occasion__card-title">OCEANIA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/africa`}>
          <article className="occasion__continent-card occasion__continent-card--africa">
            <h3 className="occasion__card-title">AFRICA</h3>
          </article>
        </Link>
        <Link to={`/${season}/${occasion}/asia`}>
          <article className="occasion__continent-card occasion__continent-card--asia">
            <h3 className="occasion__card-title">ASIA</h3>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default OccasionPage;
