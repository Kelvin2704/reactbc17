import React, { Component } from "react";
//kết nối redux
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    let { soBanThang, tongSoBanChoi, banChon } = this.props;
    console.log("Kết quả trò chơi", this.props);
    return (
      <div className="text-center container">
        <div className="display-4">
          Bạn chọn: <span className="text-danger">{banChon ? "Tài" : "Xỉu"}</span>
        </div>

        <div className="display-4">
          Tổng số bàn thắng: <span className="text-success">{soBanThang}</span>
        </div>

        <div className="display-4">
          Tổng số bàn chơi: <span className="text-danger">{tongSoBanChoi}</span>
        </div>

        <div className="display-4">
          <button
            className="btn btn-success p-3"
            style={{ fontSize: 25 }}
            onClick={() => {
              const action = {
                type: "PLAY_GAME",
                tongSoBanChoi,
              };
              this.props.dispatch(action);
            }}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  let { banChon, soBanThang, tongSoBanChoi } = rootReducer.gameXucXacReducer;
  return {
    banChon: rootReducer.gameXucXacReducer.banChon,
    soBanThang: rootReducer.gameXucXacReducer.soBanThang,
    tongSoBanChoi: tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
