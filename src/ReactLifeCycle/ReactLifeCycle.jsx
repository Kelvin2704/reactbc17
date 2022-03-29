import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      number: 1,
      like: 1,
      object: {
        number: 1,
      },
    };
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");

    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>React Life Cycle</h3>
        <h3>Number: {this.state.object.number}</h3>
        <button
          className="btn btn-success mt-2"
          onClick={() => {
            // this.setState({
            //   number: this.state.number + 1,
            // });
            let objectNum = this.state.object;
            objectNum.number += 1;
            this.setState({
              object: { ...objectNum },
            });
          }}
        >
          +
        </button>
        <hr />
        <h3>Like: {this.state.like}</h3>
        <button
          className="btn btn-warning mt-2"
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
        >
          +
        </button>
        {this.state.like > 3 ? "" : <ChildComponent objectNum={this.state.object} />}
      </div>
    );
  }
  componentDidUpdate() {
    console.log("didupdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
}
