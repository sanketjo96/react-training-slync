import React, { Component } from 'react'
import { CurrencyConsumer } from '../Context/Currency'
import { TheamConsumer } from '../Context/Theam'
import './Root.css'

export default class G extends Component {
  render() {
    return (
      <TheamConsumer>
        {
          (theam) => {
            return (
              <CurrencyConsumer>
                {
                  (currency) => {
                    return (<div className={theam}>G: {currency}</div>)
                  }
                }
              </CurrencyConsumer>
            )
          }
        }

      </TheamConsumer>

    )
  }
}
