import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
import KinhComponent from "./KinhComponent";

export default class BaiTapThuKinh extends Component {
  state = {
    detailGlasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },
  };
  ThayDoiThongTinFunc = (glassesClick) => {
    console.log("Thay đổi Kính: ", glassesClick);
    this.setState({
      detailGlasses: glassesClick,
    });
  };
  render() {
    const keyFrame = `@keyframes animateChangeGlasses${Date.now()}{
      from {
        width: 400px;
        opacity: 0.5;
      }
      to {
        width: 160px;
      }
    }`;

    let { id, price, name, url, desc } = this.state.detailGlasses;
    const styleGlasses = {
      width: "160px",
      top: "94px",
      opacity: "0.7",
      animation: `animateChangeGlasses${Date.now()} 1s`,
    };
    const infoGlasses = {
      width: "300px",
      bottom: "0px",
      backgroundColor: "rgba(255, 48, 48,0.7)",
      height: "150px",
    };
    return (
      <div
        style={{ backgroundImage: "url(./glassesImage/background.jpg)", minHeight: "980px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
        <style>{keyFrame}</style>

        <div style={{ backgroundColor: "rgba(0,0,0,.65)", minHeight: "980px" }}>
          <h3 style={{ backgroundColor: "rgba(255,228,181,0.4)" }} className="text-center text-light p-3">
            SHOPPING GLASSES ONLINE
          </h3>
          <div className="container">
            <div className="row mt-3">
              <div className="col-6">
                <div className="d-flex align-item-center justify-content-center">
                  <img className="position-relative" style={{ width: "300px" }} src="./glassesImage/model.jpg" alt="model.jpg" />
                  <img className="position-absolute" style={styleGlasses} src={url} alt="v2.png" />
                  <div className="position-absolute p-1 text-left" style={infoGlasses}>
                    <span className="font-weight-bold" style={{ color: "rgb(28,28,28)", fontSize: "17px" }}>
                      {name}
                    </span>
                    <br />
                    <span style={{ color: "rgb(28,28,28)", fontSize: "14px" }}>{desc}</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img style={{ width: "300px" }} src="./glassesImage/model.jpg" alt="model.jpg" />
              </div>
            </div>
            <h4 className="text-white mt-4">Các mẫu mắt kính</h4>

            <div className="row mt-3 justify-content-center">
              {dataGlasses.map((glass, index) => {
                return (
                  <div className="col-3 mt-3" key={index}>
                    <KinhComponent glasses={glass} ThayDoiThongTinFunc={this.ThayDoiThongTinFunc} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
