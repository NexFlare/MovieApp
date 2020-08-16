import React, { useState, useEffect } from "react";
import SearchComponent from "../SearchComponent";
import MovieCard from "./MovieCard";
import { getMovies } from "../../actions/omdb";
import Message from "../Message";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMessage, setMessge] = useState("");
  const handleSearch = searchObj => {
    setLoading(true);
    setError(false);
    getMovies(searchObj).then(res => {
      if (res.Response === "True") {
        setMovies(res.Search);
        setMessge("");
      } else {
        setMessge(res.Error);
        setError(true);
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    getMovies({
      name: "Marvel"
    }).then(res => {
      setMovies(res.Search);
      setLoading(false);
    });
  }, []);
  if (loading) return <Message type="loading" />;
  return (
    <div>
      <SearchComponent searchMovie={handleSearch} />
      {error ? (
        <Message type="error" message={errMessage} />
      ) : (
        <div className="m-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movieDetail={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
