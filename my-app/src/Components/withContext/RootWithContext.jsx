import React, { Component } from 'react'
import { CurrencyProvider } from '../Context/Currency'
import A from './A'
import B from './B'
import C from './C'

export default class RootWithContext extends Component {
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
                <CurrencyProvider value={this.state.currency}>
                    <A></A>
                    <B></B>
                    <C></C>
                </CurrencyProvider>
                <button onClick={this.changeCurrency}>Change Currency - {this.state.currency}</button>
            </div>
        )
    }
}
