import React, { Component } from 'react'

export default class Bindings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'int': 123
        }
    }

    // Accessing 'this' directly 
    touchNum = () => {
        console.log(this.state)
    }

    render() {
        return (
            <button onClick={this.touchNum}>Bindings</button>
        )
    }
}

/**
 * 
 * This looks to be a optimal and recomended way.
 * 
 * whenever you need to pass params to method, we can use arrow function wrapper option
 * by keeping perf aspect in mind.
 */