import React from "react";
import MovieList from "./components/Movie/MovieList";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FavMovieList from "./components/Movie/FavMovieList";
import MovieDetail from "./components/Movie/MovieDetail";

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
          <Route path="/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </Home>
    </>
  );
};

export default App;
