import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
}

/**
 * 1. Note how action  is now object and not simple string. This is useful to reuse same logic for specific 
 * actions in future (example increment by 5). See how its easy to update code.
 */
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...currentState, firstCounter: currentState.firstCounter + action.payload }
        case 'DECREMENT':
            return { ...currentState, firstCounter: currentState.firstCounter - action.payload }
        case 'RESET':
            return { ...currentState, firstCounter: initialState.firstCounter }
        case 'INPUT':
            return { ...currentState, input: action.payload.target.value }
        default:
            return currentState
    }
}

/**
 * 1. Note how state is complex object than simple int. This could be required when we have more than
 * one counter state to manage.
 */
function ComplexReducer() {
    const [newState, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>{JSON.stringify(newState)}</div>

            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>Increment 10</button>
        </>

    )
}

export default ComplexReducer

/**
 * What if we want to maintain multiple state variables with exact same
 * state transition. can we re-use reducer function ?
 * 
 */