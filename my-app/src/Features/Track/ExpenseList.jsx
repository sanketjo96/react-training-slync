import React, { useEffect } from 'react';
import ExpenseItem from '../../Components/ExpenseItem';
import './ExpenseList.css'

export const ExpenseList = React.forwardRef((props, ref) => {
  useEffect(() => {
    if (ref) {
      ref.current.scrollTop = props.top
    }
  }, [props.top, ref])

  return (
    <div className='expense-list-container' ref={ref}>
      {props.list.map((data) => {
        return <ExpenseItem key={data.id} data={data} onDelete={props.onDelete} onUpdate={props.onUpdate} />
      })}
    </div>
  )
})