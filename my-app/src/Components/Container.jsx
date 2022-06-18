import React, { useCallback } from 'react'
import { useState } from 'react'
import { Button } from './Button'
import { Count } from './Count'
import { Title } from './Title'

export default function Container() {
    const [age, setAge] = useState(10)
    const [sal, setSal] = useState(10000)

    const handleAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const handleSal = useCallback(() => {
        setSal(sal + 1)
    }, [sal])

    return (
        <>
            <Title>useCallback Demo</Title>
            <div>
                <Count title={"Age"} value={age}></Count>
                <Button buttonvalue={"Increment Age"} onClickHandle={handleAge}></Button>
            </div>

            <div>
                <Count title={"sal"} value={sal}></Count>
                <Button buttonvalue={"Increment sal"} onClickHandle={handleSal}></Button>
            </div>
        </>
    )
}
