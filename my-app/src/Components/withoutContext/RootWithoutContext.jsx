import React, { Component } from 'react'
import A from './A'
import B from './B'
import C from './C'

export default class RootWithoutContext extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currency: 'USD'
        }
    }
    changeCurrency = () => {
        this.setState((prev) => ({ currency: prev.currency === 'USD' ? 'INR' : 'USD' }))
    }
    render() {
        return (
            <div>
                <A currency={this.state.currency}></A>
                <B currency={this.state.currency}></B>
                <C currency={this.state.currency}></C>
                <button onClick={this.changeCurrency}>Change Currency - {this.state.currency}</button>
            </div>
        )
    }
}
