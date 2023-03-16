import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SeasonPage = () => {
  const { season } = useParams();
  return (
    <div className="season">
      <h1 className="season__title">{season}</h1>
      <h2 className="season__subtitle">Choose your occasion</h2>
      <div className="season__card-wrapper">
        <Link to={`/${season}/honeymoon`}>
          <article className="season__ocasion-card">
            <h3 className="season__card-title">HONEYMOON</h3>
          </article>
        </Link>
        <Link to={`/${season}/family`}>
          <article className="season__ocasion-card">
            <h3 className="season__card-title">FAMILY</h3>
          </article>
        </Link>
        <Link to={`/${season}/girls`}>
          <article className="season__ocasion-card">
            <h3 className="season__card-title">GIRLS TRIP</h3>
          </article>
        </Link>
        <Link to={`/${season}/stag`}>
          <article className="season__ocasion-card">
            <h3 className="season__card-title">STAG PARTY</h3>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default SeasonPage;
