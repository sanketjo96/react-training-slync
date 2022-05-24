import React, { Component } from 'react'

/**
 * 1. Note that the state logic is common across multiple component
 * and we are breaking DRYness rule.
 * 2. If we lift the state up to parent component but what if 
 * HoverCounter is not direct child of parent, we need lot of prop
 * drilling.
 */
class HoverCounter extends Component {
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

export default HoverCounter
