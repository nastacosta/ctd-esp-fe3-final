import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, alreadyFav, onClick }) => {
  // const addFav = () => {
  //   const dentista = { name: name, username: username, id: id };

  //   let favsArray = JSON.parse(localStorage.getItem("dentistasFavs"));
  //   let alreadyFav = false;

  //   favsArray
  //     ? favsArray.map((favs) => {
  //         if (favs.id == dentista.id) {
  //           alreadyFav = true;
  //         }
  //       })
  //     : (favsArray = []);

  //   if (!alreadyFav) {
  //     favsArray.push(dentista);
  //     console.log(`Dentista ${dentista.id} añadid@ a favoritos con éxito`);
  //     localStorage.setItem("dentistasFavs", JSON.stringify(favsArray));
  //   } else {
  //     console.log(`Dentista ${dentista.id} ya está en favoritos`);
  //   }
  // };

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
