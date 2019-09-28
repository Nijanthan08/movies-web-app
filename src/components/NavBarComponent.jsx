import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
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
            <NavLink to="/login" className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
