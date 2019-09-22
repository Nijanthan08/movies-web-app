import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBarComponent";
import Movies from "./MoviesComponent";
import MovieInfo from "./MovieInfoComponent";
import AddMovieComponent from "./AddMovieComponent";
import ReactLoader from "./common/Loader";
import SignUpComponent from "./SignUpComponent";
import LoginComponent from "./LoginComponent";

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
    const { loader } = this.state;
    return (
      <React.Fragment>
        <ReactLoader loader={loader} />
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
                <Movies
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  loader={loader}
                />
              )}
            />
            <Route
              path="/AddMovie"
              exact
              render={({ history }) => (
                <AddMovieComponent
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  history={history}
                />
              )}
            />
            <Route
              path="/SignUp"
              exact
              render={({ history }) => (
                <SignUpComponent
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  history={history}
                />
              )}
            />
            <Route
              path="/Login"
              exact
              render={({ history }) => (
                <LoginComponent
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  history={history}
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
