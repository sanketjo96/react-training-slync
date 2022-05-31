import React, { useState } from 'react'

/**
 * 1. Note the way to add state to functional component.
 * 2. Setter is also available along with state data
 * 3. Re-renders when setter get called
 * 
 */
export default function StateHook() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() =>  setCount(count + 1)}>Increment {count}</button>
        </div>
    )
}
