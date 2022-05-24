import React, { Component } from 'react'

/**
 * 1. Note that the state logic is common across multiple component
 * and we are breaking DRYness rule.
 * 2. If we lift the state up to parent component but what if 
 * ClickCounter is not direct child of parent, we need lot of prop
 * drilling.
 */
class ClickCounter extends Component {
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


export default ClickCounter;
