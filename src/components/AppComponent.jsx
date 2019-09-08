import React, { Component } from "react";
import { hot } from "react-hot-loader";
import NavBar from "./NavBarComponent";
import { Switch, Route } from "react-router-dom";
import Movies from "./MoviesComponent";
import MovieInfo from "./MovieInfoComponent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <h1> New Movies </h1>

          <Switch>
            <Route path="/Movies/:id" component={MovieInfo} />
            <Route path="/Movies" exact component={Movies} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
