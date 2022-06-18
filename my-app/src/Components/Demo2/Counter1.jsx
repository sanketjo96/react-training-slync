import React from 'react'
import { useCounter } from '../../Hooks/useCounter'

export default function Counter1() {
    const [count, increment, decrement, reset] = useCounter(10, 1)
    return (
        <div>
            Counter1: {count}
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
