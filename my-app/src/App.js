import React, { Component } from 'react'
import './App.css';
import { expenseData } from './Data/Seed';
import ExpenseForm from './Features/Add/ExpenseForm';
import ExpenseList from './Features/Track/ExpenseList';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseList: expenseData
    }
  }

  handlerFormSubmit = (data) => {
    this.setState((prevState) => ({
      ...prevState,
      expenseList: [...prevState.expenseList, data]
    }))
  }

  handlerListDelete = (id) => {
    
  }

  render() {
    return (
      <div className="App">
        <ExpenseForm onSubmit={this.handlerFormSubmit}></ExpenseForm>
        <ExpenseList list={this.state.expenseList}></ExpenseList>
      </div>
    )
  }
}