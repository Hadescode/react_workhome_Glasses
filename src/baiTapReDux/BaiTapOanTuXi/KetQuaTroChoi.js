import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="KQ_contrainer">
                <div className="display-5 text-warning">bạn thua SML</div>
                <div className="display-5 text-success">số bàn thắng:<span className="text-warning"> 0 </span></div>
                <div className="display-5 text-success">Tống số bàn chơi:<span className="text-warning"> 0 </span></div>

            </div>
        )
    }
}
