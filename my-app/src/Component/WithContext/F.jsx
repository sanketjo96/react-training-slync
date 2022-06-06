import React, { useContext } from 'react'
import { CurrencyContext } from '../../Context/Currency'

export default function F() {
  const currency = useContext(CurrencyContext)
  return (
    <div>F: {currency} </div>
  )
}
