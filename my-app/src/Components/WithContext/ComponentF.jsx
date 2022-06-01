import React, { useContext } from 'react'
import { CurrencyContext } from '../../Context/CurrencyContext'
import Currency from './Currency'

/**
 * 5. useContext hook can be used instead of consumer component which makes it cleaner
 * to consume 
 */
function ComponentF() {
    const currency = useContext(CurrencyContext)
    return (
        <div>Component F
            <Currency currency={currency}></Currency>
        </div>
    )
}

export default ComponentF
