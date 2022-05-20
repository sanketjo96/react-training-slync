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
            <button onClick={() => this.touchNum()}>Bindings</button>
        )
    }
}

/**
 * Problem
 * 
 * Ohh!! this worked. Wrapping method call under arraow function worked. THANKS TO ARROW FUNCTION
 * 
 * But again the problem is on every render new wrapper function will get created
 * which is the perf hit. so can we look for other better way ? YES
 * 
 * (we still can use this for few usecase by considering fact that its in render.)
 */