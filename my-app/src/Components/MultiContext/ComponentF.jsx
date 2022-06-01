import React, { useContext } from 'react'
import { CurrencyContext } from '../../Context/CurrencyContext'
import { TheamContext } from '../../Context/TheamContext'
import Currency from './Currency'

/**
 * 5. useContext hook can be used instead of consumer component which makes it cleaner
 * to consume 
 */
 function ComponentF() {
    const currency = useContext(CurrencyContext)
    const theam = useContext(TheamContext)
    return (
        <div>Component F
            <Currency theam={theam} currency={currency}></Currency>
        </div>
    )
}

export default ComponentF
