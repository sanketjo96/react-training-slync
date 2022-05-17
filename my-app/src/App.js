import React, { Component } from 'react'
import './App.css';
import { expenseData } from './Data/Seed';
import ExpenseTrack from './Features/Track/ExpenseTrack';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseList: expenseData,
      isAddMode: false,
      formMode: 'add',
      dataToUpdate: {}
    }
  }

  handleFormSubmit = (data) => {
    this.setState((prevState) => {
      if (prevState.formMode === 'update') {
        return {
          ...prevState,
          isAddMode: false,
          expenseList: [...prevState.expenseList.filter(item => item.id !== data.id), data]
        }
      } else {
        return {
          ...prevState,
          isAddMode: false,
          expenseList: [...prevState.expenseList, data]
        }
      }
    })
  }


  handleListDelete = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      expenseList: prevState.expenseList.filter(item => item.id !== id)
    }))
  }


  handleListUpdate = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      formMode: 'update',
      dataToUpdate: prevState.expenseList.find(item => item.id === id)
    }))
  }

  addExpense = () => {
    this.setState((prevState) => ({
      ...prevState,
      isAddMode: true
    }))
  }

  render() {
    return (
      <div className="App">
        <ExpenseTrack
          formMode={this.state.formMode} 
          dataToUpdate={this.state.dataToUpdate} 
          handleFormSubmit={this.handleFormSubmit}
          isAddMode={this.state.isAddMode}
          list={this.state.expenseList}
          addExpense={this.addExpense}
          onDelete={this.handleListDelete}
          onUpdate={this.handleListUpdate}>
        </ExpenseTrack>
      </div>
    )
  }
}