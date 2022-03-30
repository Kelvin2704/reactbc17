import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderHome extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink class="navbar-brand" to="/">
          Cybersoft
        </NavLink>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <NavLink exact activeClassName="bg-white text-dark" class="nav-link" to="/home">
                Home <span class="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeStyle={{ color: "orange" }} exact activeClassName="bg-white" class="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" class="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" class="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" class="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">
                  Action 1
                </a>
                <a class="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li> */}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
