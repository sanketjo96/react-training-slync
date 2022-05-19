import React, { Component } from 'react'
import './App.css';
import { expenseData } from './Data/Seed';
import { ExpenseTrack } from './Features/Track/ExpenseTrack';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTop: 0,
      expenseList: expenseData,
      isFormMode: false,
      formData: {}
    }
    this.childRef = React.createRef()
  }

  handleFormSubmit = (data) => {
    this.setState((prevState) => {
      if (data.id) {
        return {
          ...prevState,
          isFormMode: false,
          expenseList: [...prevState.expenseList.filter(item => item.id !== data.id), data]
        }
      } else {
        return {
          ...prevState,
          isFormMode: false,
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
      isFormMode: true,
      formData: prevState.expenseList.find(item => item.id === id)
    }))
  }

  addExpense = () => {
    this.setState((prevState) => ({
      ...prevState,
      listTop: this.childRef.current.scrollTop,
      formData: {},
      isFormMode: true
    }))
  }

  handleCancel = () => {
    this.setState((prevState) => ({
      ...prevState,
      isFormMode: false
    }))
  }

  render() {
    return (
      <div className="App">
        <ExpenseTrack
          ref={this.childRef}
          top={this.state.listTop}
          list={this.state.expenseList}

          formData={this.state.formData}
          handleFormSubmit={this.handleFormSubmit}
          isFormMode={this.state.isFormMode}
          addExpense={this.addExpense}
          onDelete={this.handleListDelete}
          onUpdate={this.handleListUpdate}
          onCancel={this.handleCancel}
        >
        </ExpenseTrack>
      </div>
    )
  }
}