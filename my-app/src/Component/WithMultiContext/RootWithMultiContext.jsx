import React, { useState } from 'react'
import { CurrencyProvider } from '../../Context/Currency';
import { TheamProvider } from '../../Context/Theam';
import A from './A';
import B from './B';
import C from './C';

export default function RootWithContext() {
    const [currency, setCurrecy] = useState('INR')
    const [theam, setTheam] = useState('light')


    const toggleCurrency = () => {
        setCurrecy(currency === 'INR' ? 'USD' : 'INR')
    }

    const toggleTheam = () => {
        setTheam(theam === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <button onClick={toggleCurrency}>Toggle Currency</button>
            <button onClick={toggleTheam}>Toggle Theam</button>
            <div>
                <TheamProvider value={theam}>
                    <CurrencyProvider value={currency}>
                        <A></A>
                        <B></B>
                        <C></C>
                    </CurrencyProvider>
                </TheamProvider>

            </div>
        </div>
    )
}
