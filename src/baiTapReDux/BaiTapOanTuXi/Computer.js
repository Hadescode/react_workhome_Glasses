import React, { Component } from "react";

export default class Computer extends Component {
  render() {
    return (
      <div className="playerGame text-center">
        <div className="theThink">
          <img className="mt-4"
            style={{ width: "50px", height: "50px",transform:'rotate(180deg)'}}
            src="./img/gameOanTuTi/keo.png"
            alt="./img/gameOanTuTi/keo.png"
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
