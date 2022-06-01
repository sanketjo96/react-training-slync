import React, { useContext } from 'react'
import { CounterContext } from '../Context/Counter'
import Counter from './Counter'

function F() {
    const { count, dispatch } = useContext(CounterContext)
    return (
        <div>
            <Counter
                name={'F: '}
                count={count}
                increment={() =>dispatch({ type: 'INCREMENT', value: 3 })}
                decrement={() =>dispatch({ type: 'DECREMENT', value: 3 })}
                reset={() => dispatch('RESET')}>
            </Counter>
        </div>
    )
}

export default F