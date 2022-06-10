import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
const initialState = {
    data: [],
    loading: true,
    err: false
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'POST_SUCCESS':
            return {
                ...initialState,
                loading: false,
                data: action.payload
            }
        case 'POST_ERROR':
            return {
                ...initialState,
                loading: false,
                err: true
            }
        default:
            return currentState
    }
}

export default function DataFetchReducer() {
    const [posts, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            dispatch({ type: 'POST_SUCCESS', payload: res.data })
        }).catch((e) => {
            dispatch({ type: 'POST_ERROR', payload: e })
        })
    }, [])

    return (
        <div>
            {
                posts.loading
                    ? <span>Loading...</span>
                    : (
                        posts.err
                            ? <span>Error</span>
                            : <span>{posts.data.length}</span>
                    )
            }
        </div>
    )
}
