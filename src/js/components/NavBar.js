import React, { useContext } from "react";
import { FavContext } from "./FavContext";
import { Link } from "react-router-dom";
function NavBar() {
  const { fav } = useContext(FavContext);
  return (
    <div className="m-navbar">
      <Link to="/">
        <div className="m-navbar-heading">OMDB</div>
      </Link>

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
