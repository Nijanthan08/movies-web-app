import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBarComponent";
import Movies from "./MoviesComponent";
import MovieInfo from "./MovieInfoComponent";
import AddMovieComponent from "./AddMovieComponent";
import ReactLoader from "./common/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  toggleLoaderDisplay = () => {
    this.setState({
      loader: !this.state.loader
    });
  };

  render() {
    return (
      <React.Fragment>
        <ReactLoader loader={this.state.loader} />
        <NavBar />
        <main className="container">
          <h1> New Movies </h1>

          <Switch>
            <Route
              path="/Movies/:id"
              render={({ match }) => (
                <MovieInfo
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  match={match}
                />
              )}
            />
            <Route
              path="/Movies"
              exact
              render={() => (
                <Movies toggleLoaderDisplay={this.toggleLoaderDisplay} />
              )}
            />
            <Route
              path="/AddMovie"
              exact
              render={() => (
                <AddMovieComponent
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                />
              )}
            />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
