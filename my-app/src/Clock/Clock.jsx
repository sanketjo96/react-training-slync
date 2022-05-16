import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            hrs12: false,
        }
    }

    tick = () => {
        this.setState((preState) => {
            return {
                ...preState,
                date: new Date()
            }
        })
    }

    static getDerivedStateFromProps(props, state) {
        const is12fmt = props.fmt === 12
        if (is12fmt !== state.hrs12) {
            console.log('Update: in getDerivedStateFromProps')
            return {
                ...state,
                hrs12: is12fmt
            };
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log('Update: in render')
        return (
            <div onMouseOver={this.changeDateState}>{this.state.date.toLocaleTimeString('en-us', { hour12: this.state.hrs12 })}</div>
        )
    }
}
