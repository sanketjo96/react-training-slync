import React, { useEffect, useState } from 'react'

/**
 * 
 * see how we can combine componentDidMount/componentDidUpdate
 * with just a useeffect
 * 
 */
export default function FunctionComponent() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div onClick={handleClick}>FunctionComponent</div>
    )
}
