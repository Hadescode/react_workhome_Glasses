import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../redux/actions/BaiTapDatVeActions";
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      //Trạng thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      //Xét trạng thái ghế đang đặt
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        gheDangDat => gheDangDat.soGhe === ghe.soGhe);
        if(indexGheDangDat !== -1){
            cssGheDangDat = 'gheDangChon'
        }

      return (
        <button onClick ={() => {
          this.props.datGhe(ghe)
        }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat} `}
          key={index}
        >
          {/* {index+1} */}
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className=" ml-3 mb-2">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return <div className=" text-light container">{this.renderHangGhe()}</div>;
  }
}

//lấy các state từ REDUCER về để binding dữ liệu hehe
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    datGhe: (ghe) =>{
      dispatch(datGheAction(ghe)) // gọi hàm từ File chứa action từ reducer
    }
  }
}
//kết nối với redux store
export default connect(mapStateToProps,mapDispatchToProps)(HangGhe);
