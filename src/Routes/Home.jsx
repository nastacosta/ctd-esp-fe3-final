import React, { useEffect, useReducer, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContextGlobal();
  console.log(state.favs);

  return (
    <main className="a">
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentistas.map((dentista) => (
          <Card
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
            key={dentista.id}
            onClick={() => dispatch({ type: "ADD_FAV", payload: dentista })}
          ></Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
