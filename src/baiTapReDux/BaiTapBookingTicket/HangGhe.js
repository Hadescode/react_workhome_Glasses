import React, { Component } from 'react'

export default class HangGhe extends Component {
    render() {
        return (
            <div className="text-light text-left ml-5 mt-5">
                {this.props.hangGhe.hang}
            </div>
        )
    }
}
