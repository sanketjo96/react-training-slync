import React from 'react'
import { CounterProvider } from '../Context/Counter'
import A from './A'
import B from './B'
import C from './C'

export default function Wrapper() {
  return (
    <div>
      <CounterProvider>
        <A></A>
        <B></B>
        <C></C>
      </CounterProvider>
    </div>
  )
}
