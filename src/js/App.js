import React from "react";
import MovieList from "./components/Movie/MovieList";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Home>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
        </Switch>
      </Home>
    </>
  );
};

export default App;
