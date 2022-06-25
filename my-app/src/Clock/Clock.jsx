import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        console.log('Mounting: in constructor')
    }

    changeDateState = () => {
        this.setState({
            date: new Date()
        })
    }

    static getDerivedStateFromProps(nextProp, nextState) {
        console.log('Update: in getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate() {
        console.log('Update: in shouldComponentUpdate');
        return true; 
    }

    render() {
        console.log('Update: in render')
        return (
            <div onMouseOver={this.changeDateState}>{this.state.date.toLocaleTimeString()}</div>
        )
    }

    getSnapshotBeforeUpdate(prop, state) {
        console.log('Update: in getSnapshotBeforeUpdate');
        // Logic 
        return {scroll: '100'}
    }

    componentDidUpdate(prevProps, PrevState, snapshot) {
        console.log('Update: in componentDidUpdate');
        console.log('snapshot', snapshot)
    }
}
