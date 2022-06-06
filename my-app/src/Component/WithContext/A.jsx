import React, { useContext } from 'react'
import { CurrencyContext } from '../../Context/Currency'

export default function A() {
  const currency = useContext(CurrencyContext)
  return (
    <div>A: {currency}</div>
  )
}
