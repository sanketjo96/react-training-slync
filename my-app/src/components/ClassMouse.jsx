import React, { Component } from 'react'

/**
 * 1. Note that how we are adding event listner only once
 */
export default class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    mouseMoveListner = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        console.log('attached listner')
        window.addEventListener('mousemove', this.mouseMoveListner)
    }

    render() {
        return (
            <div>x: {this.state.x}, y: {this.state.y}</div>
        )
    }
}
