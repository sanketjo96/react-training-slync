import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

export default function Timer() {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef(null)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(timer + 1)
        }, 2000)

        return () => clearInterval(timer)
    }, [timer])

    const stopTimer = () => {
        clearInterval(timerRef.current)
    }

    return (
        <>
            <div>Timer: {timer}</div>
            <button onClick={stopTimer}>Stop Timer</button>
        </>

    )
}
