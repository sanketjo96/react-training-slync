import React, { Component } from 'react'

export default class ClassTimer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }


    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('here')
            this.setState((prev) => ({ timer: prev.timer + 1 }))
        }, 2000)
    }

    stopTimer = () => {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <div>Class based Timer: {this.state.timer}</div>
                <button onClick={this.stopTimer}>Stop Timer</button>
            </div>
        )
    }
}
