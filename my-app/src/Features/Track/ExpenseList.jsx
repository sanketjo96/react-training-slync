import React, { Component } from 'react';
import ExpenseItem from '../../Components/ExpenseItem';
import { expenseData } from '../../Data/Seed'
import './ExpenseList.css';

export default class ExpenseList extends Component {
  render() {
    return (
      <div className='expense-list-container'>
        {expenseData.map((data) => {
          const { name, month, price } = data
          return <ExpenseItem name={name} month={month} price={price} />
        })}
      </div>
    )
  }
}
