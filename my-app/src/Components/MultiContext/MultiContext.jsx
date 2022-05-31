import React, { Component } from 'react'
import { CurrencyProvider } from '../../Context/CurrencyContext'
import { TheamProvider } from '../../Context/TheamContext'
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

/**
 * 4. NOte how provider is wrappeed around required component tree
 * and value attribute on provider is set to required currency value
 */
export default class MultiContext extends Component {
    constructor() {
        super()
        this.state = {
            currency: 'INR',
            theam: 'white',
        }
    }

    changeCurrency = () => {
        this.setState({ currency: 'USD' })
    }

    changeTheam = () => {
        this.setState((prevState) => ({ ...prevState, theam: prevState.theam === 'red' ? 'white' : 'red' }))
    }


    render() {
        return (
            <>
                <button onClick={this.changeCurrency}>Change currency</button>
                <button onClick={this.changeTheam}>Toggle Theam</button>
                <ComponentA currency={this.state.currency}></ComponentA>
                <div className='section-b'>
                    <TheamProvider  value={this.state.theam}>
                        <CurrencyProvider value={this.state.currency}>
                            <ComponentC></ComponentC>
                        </CurrencyProvider>
                    </TheamProvider>

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