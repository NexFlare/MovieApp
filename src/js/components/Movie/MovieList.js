import React, { useState, useEffect } from "react";
import SearchComponent from "../SearchComponent";
import MovieCard from "./MovieCard";
import { getMovies } from "../../actions/omdb";

function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies({
      name: "Marvel"
    }).then(res => setMovies(res.Search));
  }, []);
  return (
    <div className="m-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movieDetail={movie} />
      ))}
    </div>
  );
}

export default MovieList;
