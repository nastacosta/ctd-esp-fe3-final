import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <img src="/images/doctor.jpg" width={190} alt="doctor" />
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
