import React, { Component } from 'react'

export default class Bindings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'int': 123
        }

        this.handleTouchNum =  this.touchNum.bind(this)
    }

    // Accessing 'this' directly 
    touchNum() {
        console.log(this.state)
    }

    render() {
        return (
            <button onClick={this.handleTouchNum}>Bindings</button>
        )
    }
}

/**
 * Problem
 * 
 * Much better!!! Doing binding in constructor fixing repeat bindings on every render.
 * 
 * But still, we need to create additional prop against a method, imagine a case where
 * we have 15/20 methods. Lot to write and create.
 */