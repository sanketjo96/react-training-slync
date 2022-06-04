import React, { Component } from 'react'
import { CurrencyProvider } from '../Context/Currency'
import { TheamProvider } from '../Context/Theam'
import A from './A'
import B from './B'
import C from './C'

export default class RootWithMultiContext extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currency: 'USD',
            theam: 'light'
        }
    }
    changeCurrency = () => {
        this.setState((prev) => ({ ...prev, currency: prev.currency === 'USD' ? 'INR' : 'USD' }))
    }

    changeTheam = () => {
        this.setState((prev) => ({ ...prev, theam: prev.theam === 'light' ? 'dark' : 'light' }))
    }

    render() {
        return (
            <div>
                <TheamProvider value={this.state.theam}>
                    <CurrencyProvider value={this.state.currency}>
                        <A></A>
                        <B></B>
                        <C></C>
                    </CurrencyProvider>
                </TheamProvider>
                <button onClick={this.changeCurrency}>Change Currency - {this.state.currency}</button>
                <button onClick={this.changeTheam}>Change Theam - {this.state.theam}</button>
            </div>
        )
    }
}
