import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return { ...state, dentistas: action.payload };

    case "IMPORT_FAVS":
      if (action.payload == null) {
        action.payload = [];
      }
      return { ...state, favs: action.payload };

    case "ADD_FAV":
      let alreadyFav = false;

      state.favs.map((favs) => {
        if (favs.id == action.payload.id) {
          alreadyFav = true;
          console.log(`${action.payload.name} ya estaba en favoritos`);
        }
      });

      if (!alreadyFav) {
        localStorage.setItem(
          "dentistasFavs",
          JSON.stringify([...state.favs, action.payload])
        );
        console.log(`${action.payload.name} está ahora en favoritos`);
        return { ...state, favs: [...state.favs, action.payload] };
      } else {
        return { ...state };
      }

    case "THEME":
      return "";
    default:
      break;
  }
};

const initialState = {
  darkTheme: false,
  dentistas: [],
  favs: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTISTAS", payload: res.data });
    });

    const initialStorage = JSON.parse(localStorage.getItem("dentistasFavs"));
    dispatch({ type: "IMPORT_FAVS", payload: initialStorage });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);
