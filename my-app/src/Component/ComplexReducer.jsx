import React, { useReducer } from 'react'

const initialState = { firstCounter: 0 };

/**
 * 1. Note how action  is now object and not simple string. This is useful to reuse same logic for specific 
 * actions in future (example increment by 5). See how its easy to update code.
 */
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { firstCounter: currentState.firstCounter + 1 };
        case 'DECREMENT':
            return { firstCounter: currentState.firstCounter - 1 }
        // case 'INCREMENT':
        //     return { firstCounter: currentState.firstCounter + action.value };
        // case 'DECREMENT':
        //     return { firstCounter: currentState.firstCounter - action.value }
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
function ComplexReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <div>First Counter: {count.firstCounter}</div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                {/* <button onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}>Increment By 5</button> */}
                <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            </div>
            
            <div>

            </div>
        </>

    )
}

export default ComplexReducer

/**
 * What if we want to maintain multiple state variables with exact same
 * state transition. can we re-use reducer function ?
 * 
 */