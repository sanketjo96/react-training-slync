import React from 'react'
import { aggregateExpense } from '../../Service/AggregateExpense'
import ExpenseForm from '../Add/ExpenseForm'
import EPlot from './EPlot'
import ExpenseList from './ExpenseList'
import './ExpenseTrack.css'

export default function ExpenseTrack(props) {
    const { list, onDelete, onUpdate, addExpense, formMode, dataToUpdate, handleFormSubmit, isAddMode } = props
    const data = aggregateExpense(list)
    return (
        <div className='expense-track'>
            <div className="visual">
                <EPlot x={Object.keys(data)} y={Object.values(data)}></EPlot>
            </div>
            <button className='add-expense-track' onClick={addExpense}>Add Expense</button>
            <div className="list">
                {
                    isAddMode ? <ExpenseForm mode={formMode} data={dataToUpdate} onSubmit={handleFormSubmit}></ExpenseForm> 
                    : <ExpenseList list={list} onDelete={onDelete} onUpdate={onUpdate}></ExpenseList>
                }

            </div>
        </div>
    )
}
