import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOantuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
              <Player/>
          </div>
          <div className="col-4">
              <KetQuaTroChoi/>
              <button className="btn btn-success mt-4">Play Game</button>
          </div>
          <div className="col-4">
              <Computer/>
          </div>
        </div>
      </div>
    );
  }
}

