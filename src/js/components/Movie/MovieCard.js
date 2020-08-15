import React, { useContext } from "react";
import { FavContext } from "../FavContext";
function MovieCard({
  movieDetail: { Poster: poster, Title: title, Year: year, imdbID: id }
}) {
  let titleToDisplay = title;
  const { addFavMovie } = useContext(FavContext);
  if (title.length > 25) {
    titleToDisplay = title.substring(0, 25) + "..";
  }
  return (
    <div className="card card-shadow">
      <div className="m-card-container">
        <div
          className="m-card-img-container"
          onClick={() => addFavMovie({ title, year, poster, id })}
        >
          <img src={poster} alt={title} className="m-img"></img>
        </div>
        <p className="m-heading">{titleToDisplay}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;

//
