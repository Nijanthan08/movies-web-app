import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getTokenFromCookie } from "../util/authentication";
import { delTokenFromCookie } from "./../util/authentication";

class NavBar extends Component {
  clearSession = () => {
    delTokenFromCookie();
    this.props.setUserInfo(null);
  };

  render() {
    const { user } = this.props;
    const sessionActive = user && getTokenFromCookie();
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <NavLink to="/movies" className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </NavLink>
            <NavLink to="/add_movie" className="nav-item">
              <a className="nav-link" href="#">
                Add a Movie
              </a>
            </NavLink>
          </ul>
        </div>
        {sessionActive ? (
          <React.Fragment>
            <span className="navbar-text text-light">{`Hi ${user.firstName},`}</span>
            &nbsp;&nbsp;
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              onClick={this.clearSession}
            >
              Logout
            </button>
          </React.Fragment>
        ) : (
          <NavLink to="/login" className="nav-item">
            <button className="btn btn-outline-light my-2 my-sm-0">
              Login
            </button>
          </NavLink>
        )}
      </nav>
    );
  }
}

export default NavBar;
