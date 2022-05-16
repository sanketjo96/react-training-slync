import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        console.log('Mounting: in constructor')
    }

    changeDateState = (e) => {
        this.setState(prevState => {
            return {
                ...prevState,
                date: new Date()
            }
        })
    }

    static getDerivedStateFromProps() {
        console.log('Update: in getDerivedStateFromProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Update: in shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Update: in getSnapshotBeforeUpdate')
        return {scroll: '100'}
    }

    componentDidUpdate(prevProps, prevState,data) {
        console.log(data)
        console.log('Update: in componentDidUpdate')
    }

    render() {
        console.log('Update: in render')
        return (
            <div onMouseOver={this.changeDateState}>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}
