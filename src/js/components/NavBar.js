import React, { useContext } from "react";
import { FavContext } from "./FavContext";
function NavBar() {
  const { fav } = useContext(FavContext);
  console.log(fav);
  return (
    <div className="m-navbar">
      <div className="m-navbar-heading">OMDB</div>
      <div className="m-navbar-action m-action-left m-navbar-action-b">
        Fav
        <div className="badge">
          <div className="count-container count">{Object.keys(fav).length}</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
