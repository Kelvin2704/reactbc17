import React, { Component } from "react";
import GioHang from "./GioHang";
import Product from "./Product";

export default class BaiTapXemChiTietSP extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 G B",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    detailProducts: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    gioHang: [
      // { maSP: 1, tenSP: "iPhone", hinhAnh: "./img/meizuphone.jpg", giaBan: 1000, soLuong: 1 }
    ],
  };
  //Hàm xóa giỏ hàng viết tại nơi chứa state.gioHang
  xoaGioHang = (maSpClick) => {
    let gioHangUpdate = [...this.state.gioHang];
    let index = gioHangUpdate.findIndex((sp) => sp.maSP == maSpClick);
    if (index != -1) {
      gioHangUpdate.splice(index, 1);
    }
    //Cập nhật lại state giỏ hàng
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  //state ở đâu thì hàm setState ở đó
  themGioHang = (spClick) => {
    console.log("spClick: ", spClick);

    //Mỗi lần click vào sản phẩm => thêm thuộc tính soLuong cho sản phẩm đó
    let spGioHang = { ...spClick, soLuong: 1 };
    console.log("spGioHang: ", spGioHang);
    //sao chép giỏ hàng ra để xử lý
    let gioHangUpdate = [...this.state.gioHang];
    console.log(gioHangUpdate);
    //kiểm tra sp có trong giỏ hàng hay chưa
    let spGH = gioHangUpdate.find((sp) => sp.maSP === spGioHang.maSP);
    if (spGH) {
      //sản phẩm đã có trong giỏ hàng thì
      spGH.soLuong += 1;
    } else {
      gioHangUpdate.push(spGioHang); //chưa có thì sẽ thêm vào giỏ hàng
    }
    //setState giỏ hàng
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  moreDetails = (productClick) => {
    console.log("sản phẩm click: ", productClick);
    //lấy productClick thay thế cho detailProducts
    this.setState({
      detailProducts: productClick,
    });
  };

  render() {
    let { maSP, tenSP, hinhAnh, giaBan, manHinh, ram, rom, cameraSau, cameraTruoc, heDieuHanh } = this.state.detailProducts;
    return (
      <div className="container">
        <div className="mt-3">
          <h4 data-toggle="modal" data-target="#modelId" className="text-danger font-weight-bold text-right" style={{ cursor: "pointer" }}>
            Giỏ hàng(0)
          </h4>
          <GioHang gioHang={this.state.gioHang} xoaSanPham={this.xoaGioHang} />
        </div>
        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="row">
          {this.arrProduct.map((product, index) => {
            return (
              <div className="col-4" key={index}>
                <Product product={product} moreDetailFunc={this.moreDetails} themGioHang={this.themGioHang} />
              </div>
            );
          })}
        </div>

        <div className="row mt-5">
          <div className="col-5">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="..." height={300} />
          </div>

          <div className="col-7">
            <h3 className="text-center">Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
