import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang } = this.props;
    return (
      <div>
        {/* b4-modal-default */}
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary btn-lg" >
          Launch
        </button> */}
        {/* Modal */}
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phầm</th>
                      <th>Hình ảnh</th>
                      <th>Giá bán</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((spGioHang, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGioHang.maSP}</td>
                          <td>{spGioHang.tenSP}</td>
                          <td>
                            <img src={spGioHang.hinhAnh} alt="..." width={50} height={50} />
                          </td>
                          <td>{spGioHang.giaBan}</td>
                          <td>
                            <button className="btn btn-primary">+</button>
                            {spGioHang.soLuong}
                            <button className="btn btn-primary">-</button>
                          </td>
                          <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.props.xoaSanPham(spGioHang.maSP);
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
