import React, { useContext } from "react";
import { FavContext } from "./FavContext";
import { Link } from "react-router-dom";
function NavBar() {
  const { fav } = useContext(FavContext);
  console.log(fav);
  return (
    <div className="m-navbar">
      <div className="m-navbar-heading">OMDB</div>
      <div className="m-navbar-action m-action-left m-navbar-action-b">
        <Link to="/fav">Fav</Link>
        <div className="badge">
          <div className="count-container count">{Object.keys(fav).length}</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
