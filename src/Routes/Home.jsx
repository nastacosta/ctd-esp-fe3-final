import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([{}]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios(url).then((res) => {
      setDentistas(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <main className="a">
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          ></Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
