import React, { Component } from 'react'
import { CurrencyConsumer } from '../Context/Currency'

export default class G extends Component {
    render() {
        return (
            <CurrencyConsumer>
            {
              (currency) => {
                return (<div>G: {currency}</div>)
              }
            }
          </CurrencyConsumer>
        )
    }
}
