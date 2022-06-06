import React, { useState } from 'react'

/**
 * 
 * Since state does not merge in react, we need to copy
 * state of array and then add new item
 */
export default function StateHookArray() {
    const [list, setList] = useState(['1', '2', '333', '55'])

    const addItem = () => {
        setList([...list, Math.random()])
    }

    const updateItem = (numberToUpdate) => {
        setList(list.map(item => {
            if (item === numberToUpdate) {
                return Math.random()
            } else {
                return item
            }
        }))
    }

    return (
        <div>
            <button onClick={addItem}>Add</button>
            {list.map(item => {
                return (
                    <li key={item}>
                        {item}
                        <button onClick={() => updateItem(item)}>Update</button>
                    </li>
                )
            })}
        </div>
    )
}
