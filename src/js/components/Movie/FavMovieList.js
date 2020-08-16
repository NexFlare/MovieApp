import React, { useContext } from "react";
import { FavContext } from "../FavContext";
import MovieCard from "./MovieCard";

function FavMovieList() {
  const { fav } = useContext(FavContext);
  const movies = Object.keys(fav).map(key => {
    const { title, year, poster } = fav[key];
    const movie = {
      imdbID: key,
      Title: title,
      Poster: poster,
      Year: year
    };
    return movie;
  });
  return (
    <div className="m-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movieDetail={movie} favTypeCard={false} />
      ))}
    </div>
  );
}

export default FavMovieList;
