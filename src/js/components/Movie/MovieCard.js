import React, { useContext } from "react";
import { FavContext } from "../FavContext";
import { useHistory } from "react-router-dom";
function MovieCard({
  movieDetail: { Poster: poster, Title: title, Year: year, imdbID: id },
  favTypeCard = true
}) {
  let titleToDisplay = title;
  let history = useHistory();
  const { addFavMovie, fav, removeFavMovie } = useContext(FavContext);
  if (title.length > 25) {
    titleToDisplay = title.substring(0, 25) + "..";
  }

  const handleCardClicked = () => {
    history.push(`/${id}`);
  };
  const handleLikeClicked = (e) => {
    e.stopPropagation();
    if (fav[id]) removeFavMovie(id);
    else addFavMovie({ title, year, poster, id });
  };
  return (
    <div className="card card-shadow flx-20" onClick={handleCardClicked}>
      <div className="m-card-container">
        <div className="m-card-img-container">
          <img src={poster} alt={title} className="m-img"></img>
        </div>
        <p className="m-heading">{titleToDisplay}</p>
        <p className="m-subheading">{year}</p>
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
