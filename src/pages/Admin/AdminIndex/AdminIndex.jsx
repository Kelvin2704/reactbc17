import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class AdminIndex extends Component {
  render() {
    if (localStorage.getItem("userLogin") === "admin") {
      return <div>AdminIndex</div>;
    }
    alert("ban kh du quyen truy cap vao trang nay");
    return <Redirect to="home" />;
  }
}
