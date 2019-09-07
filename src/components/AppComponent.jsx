import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBarComponent";
import { Switch, Route } from "react-router-dom";
import Movies from "./MoviesComponent";
import Dummy from "./DummyComponent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <h1> Hello, World! </h1>

          <Switch>
            <Route path="/Movies" exact component={Movies} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
