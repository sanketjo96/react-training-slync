import React, { Component } from 'react'
import PureComponentWidget from './PureComponent'
import RegComponent from './RegComponent'

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'sanket'
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ name: 'sanket' })
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log('Parent component')
        return (
            <>
                <RegComponent name='RegComponentWidget'></RegComponent>
                <PureComponentWidget name='PureComponent'></PureComponentWidget>
            </>
        )
    }
}
