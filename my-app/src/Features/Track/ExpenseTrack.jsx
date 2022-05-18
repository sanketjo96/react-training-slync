import React from 'react'
import { aggregateExpense } from '../../Service/AggregateExpense'
import ExpenseForm from '../Add/ExpenseForm'
import EPlot from './EPlot'
import ExpenseList from './ExpenseList'
import './ExpenseTrack.css'

export default function ExpenseTrack(props) {
    const { 
        list, 
        onDelete, 
        onUpdate, 
        addExpense, 
        formData, 
        handleFormSubmit, 
        onCancel, 
        isFormMode 
    } = props
    const data = aggregateExpense(list)
    return (
        <div className='expense-track'>
            <div className="visual">
                <EPlot x={Object.keys(data)} y={Object.values(data)}></EPlot>
            </div>
            {isFormMode ? null : <button className='primary add-expense-track' onClick={addExpense}>Add Expense</button>}
            <div className="list">
                {
                    isFormMode
                        ? <ExpenseForm data={formData} onSubmit={handleFormSubmit} onCancel={onCancel}></ExpenseForm>
                        : <ExpenseList list={list} onDelete={onDelete} onUpdate={onUpdate}></ExpenseList>
                }

            </div>
        </div>
    )
}
