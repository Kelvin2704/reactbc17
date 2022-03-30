import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <span
          style={{ color: "blue", cursor: "pointer", fontSize: "18" }}
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Trở về
        </span>
      </div>
    );
  }
}
