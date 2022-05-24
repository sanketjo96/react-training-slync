import React, { Component } from 'react'

export default class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    hoverHandle = () => {
        this.setState({ count: ++this.state.count })
    }


    render() {
        return (
            <div onMouseOver={this.hoverHandle}>HoverCounter - {this.state.count}</div>
        )
    }
}
