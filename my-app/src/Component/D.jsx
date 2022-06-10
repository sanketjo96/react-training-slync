import React, { useContext } from 'react'
import { CounterContext } from '../Context/Counter'
import Counter from './Counter'

function D() {
  const context = useContext(CounterContext)
  return (
    <div>
      <Counter
        name="D: "
        count={context.count}
        increment={(e) => context.dispatch({ type: 'INCREMENT', payload: 1 })}
        decrement={(e) => context.dispatch({ type: 'DECREMENT', payload: 1 })}
        reset={(e) => context.dispatch({ type: 'RESET' })}>
      </Counter>
    </div>
  )
}

export default D