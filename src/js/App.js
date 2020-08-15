import React from "react";
import MovieList from "./components/Movie/MovieList";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FavMovieList from "./components/Movie/FavMovieList";

const App = () => {
  return (
    <>
      <Home>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/fav" exact>
            <FavMovieList />
          </Route>
        </Switch>
      </Home>
    </>
  );
};

export default App;
