import React, { Component } from "react";
//kết nối với redux
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log("props", this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {this.props.gioHang.map((spGH, index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>
                  <img src={spGH.hinhAnh} alt="..." width={50} />
                </td>
                <td>{spGH.giaBan}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}
                  >
                    +
                  </button>
                  {spGH.soLuong}
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.xoaGioHang(spGH.maSP);
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// Định nghĩa hàm để lấy dữ liệu từ redux về component
const mapStateToProps = (rootReducer) => {
  //rootReducer: là state tổng của ứng dụng
  // hàm này sẽ tạo ra 1 props cho component ở lệnh return
  return {
    gioHang: rootReducer.gioHangReducer,
  };
};
// định nghĩa hàm mapdispatchtoprops để tạo ra props là phương thức gửi dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    // new props
    xoaGioHang: (maSPXoa) => {
      // console.log("Mã sp click xóa", maSPXoa);
      // alert(maSPXoa);
      if (window.confirm("Bạn có muốn xóa không?")) {
        const action = {
          type: "XOA_GIO_HANG",
          maSPXoa,
        };
        //sử dụng hàm dispatch để để đưa action lên tất cả reducer
        dispatch(action);
      }
    },
    tangGiamSoLuong: (maSP, soLuong) => {
      // alert(maSP + "-" + soLuong);
      const action = {
        type: "TANG_GIAM_SL",
        maSP,
        soLuong,
      };
      console.log("action", action);
      //sau khi bấm + hoặc - tạo dữ liệu action gửi lên redux
      dispatch(action);
    },
  };
};

// Hoặc có thể viết tắt như sau:
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);

// const ComponentRedux = connect(mapStateToProps)(GioHangRedux);

// export default ComponentRedux;
