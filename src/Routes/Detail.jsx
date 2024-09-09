import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

    axios(url).then((res) => {
      setDentista(res.data);
      console.log(res.data);
    });
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <div className="detailTitleSection">
        <button className="goBackButton" onClick={() => navigate(-1)}>
          <img src="/images/back.png" alt="go back" />
        </button>
        <h1>Detail Dentist {params.id}</h1>
      </div>
      <section className="detailGrid">
        <div>
          <b>Name</b>
        </div>
        <div>
          <b>Email</b>
        </div>
        <div>
          <b>Phone</b>
        </div>
        <div>
          <b>Website</b>
        </div>
        <div>{dentista.name}</div>
        <div>{dentista.email}</div>
        <div>{dentista.phone}</div>
        <div>{dentista.website}</div>
      </section>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
