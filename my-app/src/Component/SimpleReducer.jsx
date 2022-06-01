import React, { useReducer } from 'react'

const initialState = 0;

/**
 * Action is instruction to reducer function which indicates how to do state transition.
 */
const reducer = (currentState, action) => {
    switch (action) {
        case 'INCREMENT':
            return currentState + 1;
        case 'DECREMENT':
            return currentState - 1;
        case 'RESET':
            return initialState;
        default:
            return currentState
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