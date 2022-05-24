import React, { Component } from 'react'
import withCounter from './withCounter';

/**
 * 1. Note that how we moved state logic to hoc
 * 2. Note how we are binding props than state
 */
class ClickCounter1 extends Component {
    render() {
        return (
            <button onClick={this.props.counterHandle}>
                Click Counter {this.props.count}
            </button>
        )
    }
}


export default withCounter(ClickCounter1);
