import React, { useReducer } from 'react'


/**
 * Action is instruction to reducer function which indicates how to do state transition.
 */

const initialState = 0;
const reducer = (currentCount, action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'RESET':
            return initialState
        default:
            return currentCount
    }
}

function SimpleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </>

    )
}

export default SimpleReducer