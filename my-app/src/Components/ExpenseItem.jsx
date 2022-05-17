import React from 'react'
import './ExpenseItem.css'
import DeleteIcon from '../icons/icons8-remove.svg'
import EditIcon from '../icons/icons8-edit.svg'

export default function ExpenseItem(props) {
    const {
        data: {
            id,
            name,
            month,
            price
        },
        onUpdate,
        onDelete
    } = props

    const deleteHanlder = (id) => {
        onDelete(id)
    }

    const updateHanlder = (id) => {
        onUpdate(id)
    }

    return (
        <div key={name} className='expense-item-container'>
            <div className='expense-item-seg month'>{month}</div>
            <div className='expense-item-seg name'>{name}</div>
            <div className='expense-item-seg price'>{price}</div>

            <div className="icons">
                <div className='expense-item-seg icon' onClick={() => updateHanlder(id)}>
                    <img className='edit-icon' alt={'edit'} src={EditIcon} />
                </div>

                <div className='expense-item-seg icon' onClick={() => deleteHanlder(id)}>
                    <img className='delete-icon' alt={'delete'} src={DeleteIcon}/>
                </div>
            </div>
        </div>
    )
}
