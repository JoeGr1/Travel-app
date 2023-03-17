import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SeasonPage.scss";

const SeasonPage = () => {
  const { season } = useParams();
  return (
    <div className="season">
      <h1 className="season__title">{season}</h1>
      <h2 className="season__subtitle">Choose your occasion</h2>
      <div className="season__card-wrapper">
        <Link to={`/${season}/honeymoon`} className="season__link">
          <article className="season__ocasion-card season__ocasion-card--honeymoon">
            <h3 className="season__card-title">HONEYMOON</h3>
          </article>
        </Link>
        <Link to={`/${season}/family`} className="season__link">
          <article className="season__ocasion-card season__ocasion-card--family">
            <h3 className="season__card-title">FAMILY</h3>
          </article>
        </Link>
        <Link to={`/${season}/girls`} className="season__link">
          <article className="season__ocasion-card season__ocasion-card--girls">
            <h3 className="season__card-title">GIRLS TRIP</h3>
          </article>
        </Link>
        <Link to={`/${season}/stag`} className="season__link">
          <article className="season__ocasion-card season__ocasion-card--stag">
            <h3 className="season__card-title">STAG PARTY</h3>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default SeasonPage;
