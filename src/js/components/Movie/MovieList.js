import React, { useState, useEffect } from "react";
import SearchComponent from "../SearchComponent";
import MovieCard from "./MovieCard";
import { getMovies } from "../../actions/omdb";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const handleSearch = searchObj => {
    getMovies(searchObj).then(res => {
      console.log(res);
      res.Response === "True" ? setMovies(res.Search) : setMovies([]);
    });
  };
  useEffect(() => {
    getMovies({
      name: "Marvel"
    }).then(res => setMovies(res.Search));
  }, []);
  return (
    <div>
      <SearchComponent searchMovie={handleSearch} />
      <div className="m-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movieDetail={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
