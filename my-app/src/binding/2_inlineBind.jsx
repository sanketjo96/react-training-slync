import React, { Component } from 'react'

export default class Bindings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'int': 123
        }
    }

    // Accessing 'this' directly 
    touchNum() {
        console.log(this.state)
    }

    render() {
        return (
            <button onClick={this.touchNum.bind(this)}>Bindings</button>
        )
    }
}

/**
 * Problem
 * 
 * This way results in event binding every time a component is rendered.
 * Binding activity should be single time.
 */