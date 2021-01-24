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
            src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
            alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
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
            // Xét giá trị đặc cược thêm viền cho item được chọn
            let border = {};
            if(item.datCuoc){
              border = {border:'3px solid orange'};
            }

            return <div className="col-4">
            <button onClick={() =>{this.props.datCuoc(item.ma);}} style={border} className="btnItem">
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

// Dưa dữ liệu lên redux và cập nhật lại state
const mapDispatchToProps = dispatch => {
  return{
    datCuoc: (maCuoc) =>{
      dispatch({
        type: 'CHON_KEO_BUA_BAO',
        maCuoc
      })
    }
  }
}



// kết nối redux store
export default connect (mapStateToProps,mapDispatchToProps) (Player)
