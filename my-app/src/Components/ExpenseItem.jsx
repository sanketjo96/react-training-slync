import React from 'react'
import './ExpenseItem.css'
export default function ExpenseItem(props) {
    const { name, month, price } = props
    return (
        <div key={name} className='expense-item-container'>
            <div className='expense-item-seg month'>{month}</div>
            <div className='expense-item-seg name'>{name}</div>
            <div className='expense-item-seg price'>{price}</div>
        </div>
    )
}
