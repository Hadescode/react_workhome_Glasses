import React, { Component } from "react";

export default class Player extends Component {
  render() {
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
          <div className="col-4">
            <button className="btnItem">
              <img style={{width:'35px', height:'35px'}}
                src="./img/gameOanTuTi/bao.png"
                alt="./img/gameOanTuTi/bao.png"
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img style={{width:'35px', height:'35px'}}
                src="./img/gameOanTuTi/bua.png"
                alt="./img/gameOanTuTi/bua.png"
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img style={{width:'35px', height:'35px'}}
                src="./img/gameOanTuTi/keo.png"
                alt="./img/gameOanTuTi/keo.png"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
