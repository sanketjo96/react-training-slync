import React, { useRef } from 'react'
import { useEffect } from 'react'

export default function FunctionRef() {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <div>FunctionRef</div>
            <input type="text" ref={inputRef}></input>
        </>
    )
}
