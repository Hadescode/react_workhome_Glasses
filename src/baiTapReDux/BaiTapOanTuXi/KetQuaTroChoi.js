import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="KQ_contrainer">
        <div className="display-5 text-warning">{this.props.ketQua}</div>
        <div className="display-5 text-success">
          Số bàn thắng:
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-5 text-success">
          Số bàn chơi:
          <span className="text-warning"> {this.props.soBanChoi} </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
  };
};

//kết nối redux store
export default connect(mapStateToProps)(KetQuaTroChoi);
