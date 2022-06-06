import React, { useState } from 'react'
import { CurrencyProvider } from '../../Context/Currency';
import A from './A';
import B from './B';
import C from './C';

export default function RootWithMultiContext() {
    const [currency, setCurrecy] = useState('INR')


    const toggleCurrency = () => {
        setCurrecy(currency === 'INR' ? 'USD' : 'INR')
    }

    return (
        <div>
            <button onClick={toggleCurrency}>Toggle Currency</button>
            <div>
                <CurrencyProvider value={currency}>
                    <A></A>
                    <B></B>
                    <C></C>
                </CurrencyProvider>
            </div>
        </div>
    )
}
