import React, { useEffect, useState } from 'react'

/**
 * 1. Note how we are updating doc title even though we are changing name from state
 * 2. This is unecessary. A solution is to add proper dependacy array for useeffect
 */
export default function FunctionComponentCondition() {
    const [data, setData] = useState({ count: 0, name: '' })

    useEffect(() => {
        document.title = `Clicked ${data.count} times`
    }, [data.count])

    useEffect(() => {
        console.log(data.name.length)
    }, [data.name])

    const handleClick = () => {
        setData({...data, count: data.count + 1})
    }

    const handleChange = (e) => {
        setData({ ...data, name: e.target.value })
    }

    return (
        <>
            <input value={data.name} onChange={handleChange}></input>
            <div onClick={handleClick}>FunctionComponent</div>
        </>

    )
}
