import React, { Component } from "react";
import DanhSachGlasses from "./DanhSachGlasses";
import ModelGlasses from "./ModelGlasses";
import './BaiTapGlasses.css';

export default class BaiTapGlasses extends Component {
  render() {
    return (
      <div className="glass_container">
        <div style={{ width:"100%",height:"80px",backgroundColor:"rgb(0 0 0 / 42%)"}}> 
          <h4 className="display-6 text-center text-white pt-4">
            TRY GLASSES APP ONlINE
          </h4>
        </div>
        <ModelGlasses />
        <DanhSachGlasses />
      </div>
    );
  }
}
