import React, { useContext } from 'react'
import { CurrencyContext } from '../../Context/Currency'
import { TheamContext } from '../../Context/Theam'

export default function F() {
  const currency = useContext(CurrencyContext)
  const theam = useContext(TheamContext)
  return (
    <div>F: {currency} {theam} </div>
  )
}
