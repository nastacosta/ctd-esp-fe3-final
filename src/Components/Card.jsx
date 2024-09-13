import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, alreadyFav, onClick }) => {
  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <img src="/images/doctor.jpg" width={190} alt="doctor" />
      </Link>
      {alreadyFav ? (
        <button className="favButton">Already fav</button>
      ) : (
        <button onClick={onClick} className="favButton">
          ⭐
        </button>
      )}
    </div>
  );
};

export default Card;
