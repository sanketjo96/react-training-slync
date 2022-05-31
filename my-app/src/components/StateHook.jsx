import React, { useState } from 'react'

export default function StateHook() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={() => increment()}>Increment {count}</button>
        </div>
    )
}
