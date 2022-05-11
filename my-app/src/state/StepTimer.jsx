import React, { Component } from 'react'

/**
 * Write a StepTimer component which can have -
 * 1. Private state as JS date object
 * 2. It should have refresh button to sync current time.
 * 3. By default Time should be in 24hrs format
 * 4. Format should be configurable to switch between 12hrs to 24hrs format
 */


export default class StepTimer extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    setDate = () => {
        this.setState({ date: new Date() })
    }


    render() {
        const { date } = this.state
        const { format } = this.props
        return (
            <div>
                <button onClick={this.setDate}>Refresh</button>
                <div>{date.toLocaleTimeString('en-US', {hour12: format === 24 ? false : true})}</div>
            </div>

        )
    }
}