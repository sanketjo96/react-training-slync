import React, { useMemo, useState } from 'react'
import Counter from './Counter'

export default function Container() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = () => {
        setCount1(count1 + 1)
    }

    const isEven1 = useMemo(() => {
        let i = 0;
        while (i < 600500000) i++
        console.log('Long running process')
        return count1 % 2 === 0
    }, [count1])

    const increment2 = () => {
        setCount2(count2 + 1)
    }

    return (
        <div>
            <Counter label={'counter 1'} count={count1} increment={increment1} isEven={isEven1}></Counter>
            <Counter label={'counter 2'} count={count2} increment={increment2}></Counter>
        </div>
    )
}
