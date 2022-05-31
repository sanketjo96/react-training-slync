import React, { useState } from 'react'

/**
 * 
 * Since state does not merge in react, we need to copy
 * state of array and then add new item
 */
export default function StateHookArray() {
    const [items, setItems] = useState([])

    const addItem = (e) => {
        setItems((prev) => ([...prev, {
            id: prev.length,
            name: Math.random(100)
        }]))
    }

    return (
        <div>
            <label>Add Item</label>
            <button onClick={addItem}>Add Item</button>
            <ul>

                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}

            </ul>
        </div>
    )
}
