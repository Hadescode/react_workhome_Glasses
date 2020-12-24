import React, { Component } from "react";
import { connect} from 'react-redux'
 class Computer extends Component {
  render() {
    return (
      <div className="playerGame text-center">
        <div className="theThink">
          <img className="mt-4"
            style={{ width: "50px", height: "50px",transform:'rotate(180deg)'}}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "150px", height: "150px" }}
          src="./img/gameOanTuTi/playerComputer.png"
          alt="./img/gameOanTuTi/playerComputer.png"
        />
      </div>
    );
  }
} 


//lấy các state từ REDUCER về để binding dữ liệu hehe
const mapStateToProps = state => {
  return{
    computer: state.BaiTapOanTuXiReducer.computer
  }
}


//kết nối với redux store
export default connect (mapStateToProps) (Computer)
