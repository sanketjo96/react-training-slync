import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: 0
        }
        console.log('Child Mounting: in constructor')
    }

    static getDerivedStateFromProps(state, props) {
        console.log('Child Mounting: in getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Child Mounting: in componentDidMount')
    }

    render() {
        console.log('Child Mounting: in render')
        return (
            <div>Tick</div>
        )
    }
}
