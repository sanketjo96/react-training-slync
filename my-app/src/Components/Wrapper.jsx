import React, { Component } from 'react'
import PureComponentWidget from './PureComponent'
import PureFunComponent from './PureFunComponent'
import RegComponent from './RegComponent'
import RegFunComponent from './RegFunComponent'

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
        console.log('---------------------------------')
        console.log('Parent component')
        return (
            <>
                <RegComponent name='RegComponentWidget'></RegComponent>
                <PureComponentWidget name='PureComponent'></PureComponentWidget>

                <RegFunComponent name='RegFunComponent'></RegFunComponent>
                <PureFunComponent name='PureFunComponent'></PureFunComponent>
            </>
        )
    }
}
