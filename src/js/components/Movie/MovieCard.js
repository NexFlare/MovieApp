import React, { useContext } from "react";
import { FavContext } from "../FavContext";
function MovieCard({
  movieDetail: { Poster: poster, Title: title, Year: year, imdbID: id },
  favTypeCard = true
}) {
  let titleToDisplay = title;
  const { addFavMovie, fav, removeFavMovie } = useContext(FavContext);
  if (title.length > 25) {
    titleToDisplay = title.substring(0, 25) + "..";
  }

  const handleLikeClicked = () => {
    if (fav[id]) removeFavMovie(id);
    else addFavMovie({ title, year, poster, id });
  };
  return (
    <div className="card card-shadow">
      <div className="m-card-container">
        <div className="m-card-img-container">
          <img src={poster} alt={title} className="m-img"></img>
        </div>
        <p className="m-heading">{titleToDisplay}</p>
        <p className="year">{year}</p>
        {favTypeCard ? (
          <div className="m-like-container">
            <i
              className={`fas fa-heart ${fav[id] ? "liked" : ""}`}
              onClick={handleLikeClicked}
            ></i>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MovieCard;

//
