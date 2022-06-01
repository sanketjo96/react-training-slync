import React, { useReducer } from 'react'

const initialState = { firstCounter: 0 };

/**
 * 1. Note how action  is now object and not simple string. This is useful to reuse same logic for specific 
 * actions in future (example increment by 5). See how its easy to update code.
 */
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { firstCounter: currentState.firstCounter + action.value };
        case 'DECREMENT':
            return { firstCounter: currentState.firstCounter - action.value }
        case 'RESET':
            return initialState;
        default:
            return currentState
    }
}

/**
 * 1. Note how state is complex object than simple int. This could be required when we have more than
 * one counter state to manage.
 */
function MultipleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count1, dispatch1] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <div>First Counter: {count.firstCounter}</div>
                <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            </div>

            <div>
                <div>Second Counter: {count1.firstCounter}</div>
                <button onClick={() => dispatch1({ type: 'INCREMENT', value: 2 })}>Increment</button>
                <button onClick={() => dispatch1({ type: 'DECREMENT', value: 2 })}>Decrement</button>
                <button onClick={() => dispatch1({ type: 'RESET' })}>Reset</button>
            </div>
        </>

    )
}

export default MultipleReducer