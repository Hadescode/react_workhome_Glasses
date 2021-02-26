import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span
            className="text-light"
            style={{ fontSize: "30px", marginLeft: "10px" }}
          >
            Ghế đã đặt
          </span>
          <br />

          <button className="gheDangChon"></button>
          <span
            className="text-light"
            style={{ fontSize: "30px", marginLeft: "10px" }}
          >
            Ghế đang đặt
          </span>
          <br />

          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span
            className="text-light"
            style={{ fontSize: "30px", marginLeft: "10px" }}
          >
            Ghế chưa đặt
          </span>
        </div>
        <table className="table mt-2" border="3">
          <thead>
            <tr className="text-light" style={{fontSize:25}}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-light">
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
            <tr className="text-light">
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
