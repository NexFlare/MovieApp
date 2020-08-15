import { OMDB_BASE_URL } from "../constants";
export const getMovies = async ({ name = "", year = "", type = "" }) => {
  const response = await fetch(
    `${OMDB_BASE_URL}/?s=${name}&type=${type}&y=${year}&apikey=${process.env.REACT_APP_OMDB_KEY}`
  );
  const data = await response.json();
  return data;
};
