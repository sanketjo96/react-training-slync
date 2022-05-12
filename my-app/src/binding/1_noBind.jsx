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
        console.log(this)
    }

    render() {
        return (
            <button onClick={this.touchNum}>Bindings</button>
        )
    }
}
