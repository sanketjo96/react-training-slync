import React, { useContext } from 'react'
import { CounterContext } from '../Context/Counter'
import Counter from './Counter'

function D() {
  const { count, dispatch } = useContext(CounterContext)
  return (
    <div>
      <Counter
        name={'D: '}
        count={count}
        increment={() =>dispatch({ type: 'INCREMENT', value: 2 })}
        decrement={() =>dispatch({ type: 'DECREMENT', value: 2 })}
        reset={() => dispatch('RESET')}>
      </Counter>
    </div>
  )
}

export default D