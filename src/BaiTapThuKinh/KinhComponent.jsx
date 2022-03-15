import React, { Component } from "react";

export default class KinhComponent extends Component {
  render() {
    let { glasses } = this.props;
    return (
      <div className="card" style={{ backgroundColor: "rgba(105, 105, 105,.8)", height: "180px", cursor: "pointer", filter: "drop-shadow(0 0 0.65rem black)" }}>
        <div className="card-body">
          <img src={glasses.url} style={{ width: "130px" }} alt="..." />
          <button className="btn btn-success btn-block mt-3" onClick={() => this.props.ThayDoiThongTinFunc(glasses)}>
            <span>Thử kính</span>
          </button>
        </div>
      </div>
    );
  }
}
