import React, { useContext } from 'react'
import { CounterContext } from '../Context/Counter'
import Counter from './Counter'

function A() {
  const { count, dispatch } = useContext(CounterContext)
  return (
    <div>
      <Counter
        name={'A: '}
        count={count}
        increment={() =>dispatch({ type: 'INCREMENT', value: 1 })}
        decrement={() =>dispatch({ type: 'DECREMENT', value: 1 })}
        reset={() => dispatch('RESET')}>
      </Counter>
    </div>
  )
}

export default A