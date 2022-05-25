import React, { Component } from 'react'
import Tick from './Tick'

/**
 * 1. Note sequence of life cycle methods at mounting phase
 * 2. Note the sequence along with child component
 */
export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        console.log('Mounting: in constructor')
    }

    static getDerivedStateFromProps() {
        console.log('Mounting: in getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Mounting: in componentDidMount')
    }

    render() {
        console.log('Mounting: in render')
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
                {/* <Tick></Tick> */}
            </div>
        )
    }
}
