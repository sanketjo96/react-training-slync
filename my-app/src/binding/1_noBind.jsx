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
        // We are assigning this.touchNum to onClick
        // and it will call that method internally.
        // But Calling assigned class method losses track of its this 
        return (
            <button onClick={this.touchNum}>Bindings</button>
        )
    }
}
