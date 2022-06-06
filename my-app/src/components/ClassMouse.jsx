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

    setValues = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.setValues)
    }

    componentWillUnmount() {
        console.log('unmount');
        document.removeEventListener('mousemove', this.setValues)
    }

    render() {
        return (
            <div>X: {this.state.x}, Y: {this.state.y} </div>
        )
    }
}
