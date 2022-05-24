import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandle = () => {
        this.setState({ count: ++this.state.count })
    }

    render() {
        return (
            <button onClick={this.clickHandle}>Click Counter {this.state.count}</button>
        )
    }
}
