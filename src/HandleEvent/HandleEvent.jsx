import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("xin chao cac ban");
  };

  showMess = (name) => {
    alert("Xin chao " + name);
  };

  render() {
    return (
      <div className="container">
        <h3>HandleEvent</h3>
        <button onClick={this.handleClick}>Show Message</button>
        <button
          onClick={() => {
            alert("Hello World");
          }}
        >
          Click me
        </button>
        <hr />
        <h3>Handle Event Parameter</h3>
        <button onClick={this.showMess.bind(this, "Loc")}>Show Mess</button>
        <button onClick={()=>{// arrow nay la cua ham onclick
            this.showMess('Loc Dep Trai')
        }}></button>
      </div>
    );
  }
}
