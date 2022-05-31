import React, { useState } from 'react'

/**
 * RECAP
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

/**
 * Rules for hooks
 * 1. Only call hooks at top level and dont call inside loops, conditions or inner functions
 * 2. Only call hooks from react functional component and not from any regular JS function
 */