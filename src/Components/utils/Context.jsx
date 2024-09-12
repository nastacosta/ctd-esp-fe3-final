import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return { ...state, dentistas: action.payload };
    case "GET_FAVS":
      return { ...state, favs: [action.payload] };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
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
    const initialStorage = JSON.parse(localStorage.getItem("dentistasFavs"));

    const url = "https://jsonplaceholder.typicode.com/users";
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTISTAS", payload: res.data });
    });

    dispatch({ type: "GET_FAVS", payload: initialStorage });
  }, []);

  useEffect(() => {
    localStorage.setItem("dentistasFavs", JSON.stringify(state.favs));
  }, [state]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);
