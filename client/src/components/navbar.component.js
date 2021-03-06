import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/hashtags" className="nav-link">
                Hashtags
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/birthdays" className="nav-link">
                Birthdays
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/addbirthday" className="nav-link">
                Add Birthday
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
