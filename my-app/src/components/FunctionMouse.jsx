import React, { useEffect, useState } from 'react'

/**
 * Note that on every render we end up attaching listner which is odd.
 */
export default function FunctionMouse() {
    const [data, setPosition] = useState({ x: 0, y: 0 })
    const mouseMoveListner = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        console.log('attached listner')
        window.addEventListener('mousemove', mouseMoveListner)
    })


    // useEffect(() => {
    //     window.addEventListener('mousemove', mouseMoveListner)
    // }, [])


    return (
        <div>x: {data.x}, y: {data.y}</div>
    )
}
