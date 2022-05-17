import React, { Component } from 'react';
import ExpenseItem from '../../Components/ExpenseItem';
import './ExpenseList.css';

export default class ExpenseList extends Component {
  render() {
    return (
      <div className='expense-list-container'>
        {this.props.list.map((data) => {
          return <ExpenseItem data={data} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}/>
        })}
      </div>
    )
  }
}
