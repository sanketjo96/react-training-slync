import React from 'react'
import { aggregateExpense } from '../../Service/AggregateExpense'
import ExpenseForm from '../Add/ExpenseForm'
import EPlot from './EPlot'
import { ExpenseList } from './ExpenseList'
import './ExpenseTrack.css'

export const ExpenseTrack = React.forwardRef((props, ref) => {
    const {
        top,
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
            <>
                {
                    isFormMode
                        ? <ExpenseForm data={formData} onSubmit={handleFormSubmit} onCancel={onCancel}></ExpenseForm>
                        : <ExpenseList top={top} ref={ref} list={list} onDelete={onDelete} onUpdate={onUpdate}></ExpenseList>
                }

            </>
        </div>
    )
})
