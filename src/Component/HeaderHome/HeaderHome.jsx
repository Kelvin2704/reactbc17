import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeStyle={{ color: "orange" }} exact activeClassName="bg-white" className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/todoapp">
                To do App
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/demohoc">
                Demo HOC
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hook
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/hookusestate">
                  UseState
                </NavLink>
                <NavLink className="dropdown-item" to="/useefffect">
                  UseEffect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  UseCallback
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                  UseMemo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  UseRef
                </NavLink>
                <NavLink className="dropdown-item" to="/reduxhook">
                  Redux Hook
                </NavLink>
                <NavLink className="dropdown-item" to="/todolisthook">
                  ToDoListHook
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
