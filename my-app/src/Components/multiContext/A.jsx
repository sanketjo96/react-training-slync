import React, { Component } from 'react'
import { CurrencyConsumer } from '../Context/Currency'

export default class A extends Component {
  render() {
    return (
      <CurrencyConsumer>
        {
          (currency) => {
            return (<div>A: {currency}</div>)
          }
        }
      </CurrencyConsumer>
    )
  }
}