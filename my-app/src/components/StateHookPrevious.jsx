import React, { useState } from 'react'

function StateHookPrevious() {
    const [count, setCount] = useState(0)

    /**
     * Note how this handler works. 
     * setCount refers to staled value.
     */
    // const incrementBy5 = () => {
    //     for (let i = 0; i < 5; i++) {
    //         setCount(count + 1)
    //     }
    // }

    const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevState) => prevState + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>

            <div>
                <button onClick={() => incrementBy5()}>Increment By 5</button>
            </div>
        </div>
    )
}

export default StateHookPrevious