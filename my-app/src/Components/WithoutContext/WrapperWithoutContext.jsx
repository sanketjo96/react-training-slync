import React, { Component } from 'react'
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

/**
 * 1. Note how we are passing in props from top level
 * component to grand child components.
 * 2. Prop drilling can be tricky where high depth component tree
 * 3. Need some better way.
 */
export default class WrapperWithoutContext extends Component {
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
                    <ComponentC currency={this.state.currency}></ComponentC>
                </div>
            </>

        )
    }
}
