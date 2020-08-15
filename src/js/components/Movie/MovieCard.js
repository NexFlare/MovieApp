import React from "react";

function MovieCard({
  movieDetail: { Poster: poster, Title: title, Year: year }
}) {
  let titleToDisplay = title;
  if (title.length > 25) {
    titleToDisplay = title.substring(0, 25) + "..";
  }
  return (
    <div className="card card-shadow">
      <div className="m-card-container">
        <div className="m-card-img-container">
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
