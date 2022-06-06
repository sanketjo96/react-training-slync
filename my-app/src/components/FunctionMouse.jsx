import React, { useEffect, useState } from 'react'

/**
 * Note that on every render we end up attaching listner which is odd.
 */
export default function FunctionMouse() {
    const [data, setPosition] = useState({ x: 0, y: 0 })

    const setValues = (e) => {
        // console.log('inside setValues')
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        console.log('effect run')
        document.addEventListener('mousemove', setValues)

        return () => {
            console.log('cleanup')
        }
    }, [])

    return (
        <div>x: {data.x}, y: {data.y}</div>
    )
}
