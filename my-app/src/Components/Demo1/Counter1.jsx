import React, { useState } from 'react'
// import { useEffect } from 'react'
import { useDocument } from '../../Hooks/useDocument'

export default function Counter1() {
    const [count, setCount] = useState(10)

    // useEffect(() => {
    //     document.title = count
    // }, [count])

    useDocument(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter 1</button>
        </div>
    )
}
