import React from 'react'
import { useCounter } from '../../Hooks/useCounter'

export default function Counter2() {
    const [count, increment, decrement, reset] = useCounter(100, 10)
    return (
        <div>
            Counter2: {count}
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
