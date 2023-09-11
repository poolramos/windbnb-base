import "./Card.css";
import { LiaStarSolid } from "react-icons/lia";

const Card = ({ beds, photo, rating, superHost, title, type }) => {
  return (
    <article>
      <div className="image-container">
        <img
          src={photo}
          alt={title}
          style={{ width: "100%", height: "100%", borderRadius: "12px" }}
        />
      </div>
      <div className="card-information">
        <div className="superhost-div">
          {superHost ? <span className="superhost">SUPERHOST</span> : " "}
          <span className="type">
            {type}. {beds} {beds == 0 || beds == 1 ? "bed" : "beds"}
          </span>
        </div>

        <div className="card-rating">
          <LiaStarSolid
            style={{
              display: "inline-flex",
              marginRight: "12px",
              color: "#eb5757",
            }}
          />
          <span className="rating">{rating}</span>
        </div>
      </div>
      <div style={{ fontWeight: 600, color: "#333333" }}>{title}</div>
    </article>
  );
};

export default Card;
