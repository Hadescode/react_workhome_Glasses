import React, { Component } from "react";
import "./BaiTapGlasses.css";

export default class ModelGlasses extends Component {
  render() {
    return (
      <div className="model row">
        <div className="model_content col-6 mb-4 mt-5">
          <div className="card">
            <img className="card-img-top" src="./img/glass/model.jpg" alt="h1" />
            <img className="card-img-bot" src="./img/glass/v1.png" alt="h2" />
            <div className="card-body">
              <h6 className="card-title">GUCCI G8850U</h6>
              <p className="card-text">
                Light pink square lenses define these sunglasses, ending with
                amother of pearl effect tip.
              </p>
            </div>
          </div>
        </div>
        <div className="model_content1 col-6 mb-4 mt-5">
          <div className="card">
            <img className="card-img-top" src="./img/glass/model.jpg" alt="h1" />
          </div>
        </div>
      </div>
    );
  }
}
