import React, { Component } from "react";
import { connect} from 'react-redux'
 class Computer extends Component {
  render() {
        // định nghĩa 1 cái keyframe
        let keyframe = `@keyframes randomItem${Date.now()} {
          0% {top: -25px;}
          25% {top: 50px;}
          50% {top: -50px;}
          75% {top: 25px;}
          100% {top: 0;}
        }`
    return (
      <div className="playerGame text-center">
        <style>
          {keyframe}
        </style>
        <div style={{position:'relative'}} className="theThink">
          <img className="mt-4"  width={'50px'} height={'50px'}
            style={{
            position:'absolute', 
            left:'25%',
            animation:`randomItem${Date.now()} 0.5s`,
            transform:'rotate(180deg)'}}
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
