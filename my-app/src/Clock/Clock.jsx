import React, { Component } from 'react'

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
    }

    componentDidMount() {
        console.log('Mounting: in componentDidMount')
    }

    render() {
        console.log('Mounting: in render')
        return (
            <div>Clock</div>
        )
    }
}
