import React from "react";

function MovieCard({
  movieDetail: { Poster: poster, Title: title, Year: year }
}) {
  return (
    <div className="card card-shadow">
      <div className="m-card-container">
        <div className="m-card-img-container">
          <img src={poster} alt="Lion king" className="m-img"></img>
        </div>
        <p className="m-heading">{title}</p>
      </div>
    </div>
  );
}

export default MovieCard;

//
