import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const dentistasFavs = JSON.parse(localStorage.getItem("dentistasFavs"));
  console.log(dentistasFavs);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentistasFavs ? (
          dentistasFavs.map((dentista) => (
            <Card
              alreadyFav
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
              key={dentista.id}
            ></Card>
          ))
        ) : (
          <h1>Aún no tienes dentistas favoritos :(</h1>
        )}
      </div>
    </>
  );
};

export default Favs;
