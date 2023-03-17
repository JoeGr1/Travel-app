import { useParams } from "react-router-dom";
import "./Modal.scss";
import { v4 as uuid } from "uuid";

const Modal = ({ destination, submitHandler }) => {
  const { season, occasion, continent } = useParams();

  const activities = destination.activities;
  const comments = destination.comments;

  return (
    <section className="modal">
      <div className="modal__img-wrap"></div>
      <div className="modal__info-wrap">
        <h3 className="modal__name">{destination.name}</h3>
        <p className="modal__description">{destination.description}</p>
        <ul className="modal__activities-list">
          {activities.map((activity) => {
            return (
              <li key={uuid()} className="modal__activity-item">
                {activity}
              </li>
            );
          })}
        </ul>
        <ul className="modal__hash-list">
          <li className="modal__hash-item">{`#${season}`}</li>
          <li className="modal__hash-item">{`#${occasion}`}</li>
          <li className="modal__hash-item">{`#${continent}`}</li>
        </ul>
        <ul className="modal__comments">
          {" "}
          {comments.map((comment) => {
            return (
              <li key={comment.id} className="modal__comment-item">
                <h4 className="modal__comment-name">{comment.name}</h4>
                <p className="modal__comment">{comment.comment}</p>
                <p className="modal__comment-date">{comment.timestamp}</p>
              </li>
            );
          })}
        </ul>

        <form id="commentForm" className="new-comment" onSubmit={submitHandler}>
          <div className="new-comment__avatar" alt="avatar"></div>

          <div className="new-comment__wrap">
            <div className="new-comment__label-wrap">
              <label htmlFor="comment" className="new-comment__label">
                JOIN THE CONVERSATION
              </label>
              <textarea
                type="text"
                name="comment"
                placeholder="Add a new comment"
                className={`new-comment__input new-comment__input--text 
             
                `}
              ></textarea>
            </div>
            <div className="new-comment__btn">
              <button
                id="submitBtn"
                className="new-comment__btn-comment"
                type="submit"
              >
                COMMENT
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
