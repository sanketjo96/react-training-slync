import React, { useReducer } from 'react'

const initialState = {
    counter: 0,
};

/**
 * 1. Note how action  is now object and not simple string. This is useful to reuse same logic for specific 
 * actions in future (example increment by 5). See how its easy to update code.
 */
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: currentState.counter + action.value };
        case 'DECREMENT':
            return { counter: currentState.counter - action.value }
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
    const [newState1, dispatch1] = useReducer(reducer, initialState)
    const [newState2, dispatch2] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                Counter 1: {newState1.counter}
                <button onClick={() => dispatch1({ type: 'INCREMENT', value: 1 })}>INCREMENT</button>
                <button onClick={() => dispatch1({type: 'DECREMENT', value: 1})}>DECREMENT</button>
                <button onClick={() => dispatch1({type: 'RESET'})}>RESET</button>
            </div>

            <div>
                Counter 2: {newState2.counter}
                <button onClick={() => dispatch2({type: 'INCREMENT', value: 1})}>INCREMENT</button>
                <button onClick={() => dispatch2({type: 'DECREMENT', value: 1})}>DECREMENT</button>
                <button onClick={() => dispatch2({type: 'RESET'})}>RESET</button>
            </div>
        </>

    )
}

export default MultipleReducer