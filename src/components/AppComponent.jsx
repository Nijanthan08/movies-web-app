import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBarComponent";
import Movies from "./MoviesComponent";
import MovieInfo from "./MovieInfoComponent";
import AddMovieComponent from "./AddMovieComponent";

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
            <Route path="/AddMovie" exact component={AddMovieComponent} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
