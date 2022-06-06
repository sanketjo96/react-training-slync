import React, { useContext } from 'react'
import { CurrencyContext } from '../../Context/Currency'

export default function D() {
  const currency = useContext(CurrencyContext)
  return (
    <div>D: {currency } </div>
  )
}
