export const initialState = {
    count: 0
}

export const reducer = (currentState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: currentState.count + action.payload }
        case 'DECREMENT':
            return { count: currentState.count - action.payload }
        case 'RESET':
            return initialState
        default:
            return currentState
    }
}