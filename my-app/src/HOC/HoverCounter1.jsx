import React, { Component } from 'react'
import withCounter from './withCounter'

/**
 * 1. Note that how we moved state logic to hoc
 * 2. Note how we are binding props than state
 */
class HoverCounter1 extends Component {
    render() {
        return (
            <div onMouseOver={this.props.counterHandle}>HoverCounter - {this.props.count}</div>
        )
    }
}

export default withCounter(HoverCounter1)
