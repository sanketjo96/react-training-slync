import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // incrementBy5 = () => {
    //     for (let i = 0; i < 5; i++) {
    //         this.setState({ count: this.state.count + 1 })
    //     }
    // }

    incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            this.setState((prev) => ({ count: prev.count + 1 }))
        }
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                    <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
                    <button onClick={() => this.setState({ count: 0 })}>Reset</button>
                </div>

                <div>
                    <button onClick={this.incrementBy5}>Increment By 5</button>
                </div>
            </div>
        )
    }
}
