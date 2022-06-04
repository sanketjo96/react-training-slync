import React, { Component } from 'react'
import { CurrencyConsumer } from '../Context/Currency'

export default class D extends Component {
  render() {
    return (
      <CurrencyConsumer>
        {
          (currency) => {
            return (<div>D: {currency}</div>)
          }
        }
      </CurrencyConsumer>
    )
  }
}
