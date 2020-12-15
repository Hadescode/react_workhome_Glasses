import React, { Component } from "react";
import {connect} from  'react-redux';
class Player extends Component {
  render() {
    console.log('props',this.props.mangDatCuoc)
    return (
      <div className="playerGame text-center">
        <div className="theThink">
        <img className="mt-4"
            style={{ width: "50px", height: "50px", }}
            src="./img/gameOanTuTi/bua.png"
            alt="./img/gameOanTuTi/bua.png"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "150px", height: "150px" }}
          src="./img/gameOanTuTi/player.png"
          alt="./img/gameOanTuTi/player.png"
        />
        <div className="row">
          {/* render trên giao diện  */}
          {this.props.mangDatCuoc.map((item,index)=>{
            return <div className="col-4">
            <button className="btnItem">
              <img style={{width:'35px', height:'35px'}}
                src={item.hinhAnh}
                alt="./img/gameOanTuTi/bao.png"
              />
            </button>
          </div>
          })}
        </div>
      </div>
    );
  }
}

// biến state bên Reducer thành props chuyền vào component
const mapStateToProps = state => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
  }
}


// kết nối redux store
export default connect (mapStateToProps) (Player)
