import React, { Component } from "react";
import "./BTBookingTicket.css";
import danhSachGhe from '../../Data/danhSachGhe.json'
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
export default class BaiTapBookingTicket extends Component {
  //render theo hàng ghế hàng ngang
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <div style={{ fontSize: "35px" }} className="text-warning">
                Đặt Vé Xem Phim JAV 18+
              </div>
              <div className="mt-2 text-light" style={{ fontSize: "20px" }}>
                Màn Hình
              </div>
              <div
                className="mt-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div className="screen"></div>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <h1
                style={{ fontSize: "35px", textAlign: "center" }}
                className="text-warning display-4"
              >
                Danh Sách Ghế Bạn Chọn
              </h1>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
