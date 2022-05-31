import React, { Component } from 'react'
import { CurrencyConsumer } from '../../Context/CurrencyContext'
import { TheamConsumer } from '../../Context/TheamContext'
import Currency from './Currency'

/**
 * 5. Passing function as child to consumer component.
 * function will take context value as param and one can return required mark up using
 * context  
 */
export default class ComponentF extends Component {
    render() {
        return (
            <div>Component F
                <TheamConsumer>
                    {
                        (theam) => {
                            return (<CurrencyConsumer>
                                {
                                    (currency) => {
                                        return <Currency theam={theam} currency={currency}></Currency>
                                    }
                                }
                            </CurrencyConsumer>)
                        }
                    }
                </TheamConsumer>
            </div>
        )
    }
}
