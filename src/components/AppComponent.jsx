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
import { decodeToken } from "../util/authentication";
import { ToastContainer } from "react-toastify";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      user: null
    };
  }

  componentDidMount() {
    this.setUserInfo(decodeToken());
  }

  setUserInfo = user => this.setState({ user });

  toggleLoaderDisplay = () => {
    this.setState({
      loader: !this.state.loader
    });
  };

  render() {
    const { loader, user } = this.state;

    return (
      <React.Fragment>
        <ReactLoader loader={loader} />
        <ToastContainer />
        <NavBar user={user} setUserInfo={this.setUserInfo} />
        <main className="container">
          <h1> New Movies </h1>

          <Switch>
            <Route
              path="/Movies/:id"
              render={({ match }) => (
                <MovieInfo
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  match={match}
                  user={user}
                />
              )}
            />
            <Route
              path="/movies"
              exact
              render={() => (
                <Movies
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  loader={loader}
                />
              )}
            />
            <Route
              path="/add_movie"
              exact
              render={({ history }) => (
                <AddMovieComponent
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  history={history}
                  user={user}
                />
              )}
            />
            <Route
              path="/sign_up"
              exact
              render={({ history }) => (
                <SignUpComponent
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  history={history}
                />
              )}
            />
            <Route
              path="/login"
              exact
              render={({ history }) => (
                <LoginComponent
                  toggleLoaderDisplay={this.toggleLoaderDisplay}
                  history={history}
                  setUserInfo={this.setUserInfo}
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
