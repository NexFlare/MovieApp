import React, { useReducer, createContext } from "react";
import { ADD_FAV, REMOVE_FAV } from "../constants/index";
export const FavContext = createContext();

const getInitialState = () => {
  if (localStorage.getItem("fav"))
    return JSON.parse(localStorage.getItem("fav"));
  else return {};
};
const initialState = getInitialState();

const reducer = (state, action) => {
  if (action.type === ADD_FAV) {
    const { id, title, year, poster } = action.payload || {};
    return {
      ...state,
      [id]: {
        title,
        year,
        poster
      }
    };
  }
  if (action.type === REMOVE_FAV) {
    console.log(delete state[action.payload.id]);
    console.log(state);
    return { ...state };
  }
  return state;
};
export function FavProvider({ children }) {
  const [fav, dispatch] = useReducer(reducer, initialState);
  const addFavMovie = ({ title, poster, id, year }) => {
    dispatch({ type: ADD_FAV, payload: { title, poster, id, year } });
    localStorage.setItem(
      "fav",
      JSON.stringify({ ...fav, [id]: { title, poster, id, year } })
    );
  };

  const removeFavMovie = id => {
    dispatch({ type: REMOVE_FAV, payload: { id } });
    localStorage.setItem("fav", JSON.stringify(fav));
  };
  const value = { fav, addFavMovie, removeFavMovie };
  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
}
