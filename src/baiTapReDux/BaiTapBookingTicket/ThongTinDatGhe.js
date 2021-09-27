import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/actions/BaiTapDatVeActions";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span
            className="text-light"
            style={{ fontSize: "25px", marginLeft: "10px" }}
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
        <table className="table mt-2" border="3" style={{borderColor:"white"}}>
          <thead>
            <tr className="text-light" style={{fontSize:20}}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody className="text-warning">
           {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
             return <tr key={index}>
               <td>{gheDangDat.soGhe}</td>
               <td>{gheDangDat.gia.toLocaleString()}</td>
               <td><button onClick={()=>{
                 //Cách 1: gọi trực tiếp dispatch viết theo actioncreator, không truyền tham số thứ 2
                //  this.props.dispatch( huyGheAction(gheDangDat.soGhe)) 
                this.props.huyGhe(gheDangDat.soGhe)
               }}>Hủy</button></td>
             </tr>
           })}
          </tbody>
          <tfoot>
             <tr className="text-warning">
               <td></td>
               <td>Tổng Tiền</td>
               <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                 return tongTien += gheDangDat.gia;
               },0).toLocaleString()}</td>
             </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    huyGhe: (soGhe) =>{
      dispatch(huyGheAction(soGhe))
    }
  } 
}

export default connect(mapStateToProps,mapDispatchToProps) (ThongTinDatGhe);