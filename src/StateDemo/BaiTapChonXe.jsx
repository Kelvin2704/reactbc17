import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    pictureCar: "./img/black-car.jpg",
  };

//  handleChangColor = (color)=>{
//      this.setState({
//          pictureCar:`./img/$`
//      })

//  }
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <img className="w-100" src={this.state.pictureCar} alt="..." />
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button
                className="btn btn-dark"
                onClick={() => {
                  //   let newImg = './img/black-car.jpg';
                  this.setState({
                    pictureCar: "./img/black-car.jpg",
                  });
                }}
              >
                Black
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.setState({
                    pictureCar: "./img/red-car.jpg",
                  });
                }}
              >
                Red
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn"
                onClick={() => {
                  this.setState({
                    pictureCar: "./img/silver-car.jpg",
                  });
                }}
                style={{ background: "silver" }}
              >
                Silver
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn"
                onClick={() => {
                  this.setState({
                    pictureCar: "./img/steel-car.jpg",
                  });
                }}
                style={{ background: "gray" }}
              >
                Steel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
