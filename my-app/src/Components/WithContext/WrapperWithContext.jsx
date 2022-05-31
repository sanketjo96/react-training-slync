import React, { Component } from 'react'
import { CurrencyProvider } from '../../Context/CurrencyContext'
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

/**
 * 4. NOte how provider is wrappeed around required component tree
 * and value attribute on provider is set to required currency value
 */
export default class WrapperWithContext extends Component {
    constructor() {
        super()
        this.state = {
            currency: 'INR'
        }
    }

    changeCurrency = () => {
        this.setState({ currency: 'USD' })
    }

    render() {
        return (
            <>
                <button onClick={this.changeCurrency}>Change currency</button>
                <ComponentA currency={this.state.currency}></ComponentA>
                <div className='section-b'>
                    <CurrencyProvider value={this.state.currency}>
                        <ComponentC></ComponentC>
                    </CurrencyProvider>
                </div>
            </>

        )
    }
}

/**
 * If you missed out on adding CurrencyProvider altogather and have 
 * default data set during context creation, consumer will recive that 
 * default data.
 */