import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import {connect} from 'react-redux'
 class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOantuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
              <Player/>
          </div>
          <div className="col-4">
              <KetQuaTroChoi/>
              <button onClick={()=>{this.props.playGame()}} className="btn btn-success mt-4">Play Game</button>
          </div>
          <div className="col-4">
              <Computer/>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    playGame:()=>{
      let count = 20;
      //Khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(()=>{
        dispatch({
          type: 'RAN_DOM',
        })
        count ++;
        if(count >= 10){
          // dừng hàm setInterVal
          clearInterval(randomComputerItem)

          dispatch({
            type: 'END_GAME',
            
          })
        }
      },100)
    } 
  }
}

//tạo kết nối vối redux store
export default connect (null, mapDispatchToProps) (BaiTapOanTuXi);


