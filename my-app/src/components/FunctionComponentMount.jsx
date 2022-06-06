import React, { useEffect, useState } from 'react'

export default function FunctionComponentMount() {
    const [count, setCount] = useState(0)

    /**
     * Like componentDidMount
     */
    useEffect(() => {
        document.title = `New Tab`;
    }, [])

    /**
     * Like componentDidUpdate
     */
    useEffect(() => {
        if (count) {
            document.title = `Clicked ${count} times`;
        }
    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div onClick={handleClick}>FunctionComponentMount</div>
    )
}
