import React, { useState, useEffect } from "react";
import Message from "../Message";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../actions/omdb";

function MovieDetail() {
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setError(false);
    setLoading(true);
    getMovieById(id).then(res => {
      console.log(res);
      setLoading(false);
      if (res.Response === "False") {
        setError(true);
        setErrorMsg(res.Error);
      } else {
        setDetail(res);
      }
    });
  }, []);
  if (loading) return <Message />;

  if (error) return <Message type="error" message={errorMsg} />;

  return (
    <div className="m-detail-container">
      <div className="card flx m-detail-poster">
        <img src={detail.Poster} className="m-img" alt={detail.Title} />
      </div>
      <div className="m-detail flx-50">
        <p className="m-detail-heading ">{detail.Title}</p>
        <div className="m-subheading">
          <p>{detail.Year}</p>
          <p>{detail.Genre}</p>
          <div className="m-detail-actor">{detail.Actors}</div>
          <div className="m-detail-plot">{detail.Plot}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
