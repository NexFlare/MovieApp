import { OMDB_BASE_URL } from "../constants";
export const getMovies = async ({ name }) => {
  const response = await fetch(
    `${OMDB_BASE_URL}/?s=${name}&apikey=${process.env.REACT_APP_OMDB_KEY}`
  );
  const data = await response.json();
  return data;
};
