import { useParams } from "react-router-dom";
import "./Modal.scss";

const Modal = ({ destination }) => {
  const { season, occasion, continent } = useParams();
  return (
    <section className="modal">
      <div className="modal__img-wrap"></div>
      <div className="modal__info-wrap">
        <h3 className="modal__name">{destination.name}</h3>
        <p className="modal__description">...</p>
        <ul className="modal__activities-list">mapping</ul>
        <ul className="modal__hash-list">
          <li className="modal__hash-item">{`#${season}`}</li>
          <li className="modal__hash-item">{`#${occasion}`}</li>
          <li className="modal__hash-item">{`#${continent}`}</li>
        </ul>
      </div>
    </section>
  );
};

export default Modal;
