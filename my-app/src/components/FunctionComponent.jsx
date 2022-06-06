import React, { useEffect, useState } from 'react'

/**
 * 
 * see how we can combine componentDidMount/componentDidUpdate
 * with just a useeffect
 * 
 */
export default function FunctionComponent() {
    const [state, setCount] = useState({ count: 0 })

    useEffect(() => {
        document.title = `Button Clicked ${state.count} times`
    })

    const handleClick = () => {
        setCount({ count: state.count + 1 })
    }

    return (
        <div onClick={handleClick}>Functional Component</div>
    )
}
