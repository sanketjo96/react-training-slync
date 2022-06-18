import React, { useState } from 'react'
import { useDocument } from '../../Hooks/useDocument'

export default function Counter2() {
    const [count, setCount] = useState(100)

    useDocument(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter 2</button>
        </div>
    )
}
