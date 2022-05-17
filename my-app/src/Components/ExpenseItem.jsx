import React from 'react'
import './ExpenseItem.css'
export default function ExpenseItem(props) {
    const {
        data: {
            id,
            name,
            month,
            price
        },
        onDelete
    } = props

    const deleteHanlder = (id) => {
        onDelete(id)
    }
    return (
        <div key={name} className='expense-item-container'>
            <div className='expense-item-seg month'>{month}</div>
            <div className='expense-item-seg name'>{name}</div>
            <div className='expense-item-seg price'>{price}</div>
            <div className='expense-item-seg delete-icon' onClick={() => deleteHanlder(id)}>delete</div>
        </div>
    )
}
