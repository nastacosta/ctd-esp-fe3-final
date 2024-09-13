import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_THEME", payload: !state.darkTheme });
        }}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
