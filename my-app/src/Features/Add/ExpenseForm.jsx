import React, { Component } from 'react'
import { months } from '../../Data/Months'
import { v4 as uuidv4 } from 'uuid';
export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            month: 1,
            price: 0,
        }
    }

    handleName = (e) => {
        this.setState((preState) => {
            return {
                ...preState,
                name: e.target.value
            }
        })
    }


    handlePrice = (e) => {
        this.setState((preState) => {
            return {
                ...preState,
                price: e.target.value
            }
        })
    }


    handleMonth = (e) => {
        this.setState((preState) => {
            return {
                ...preState,
                month: e.target.value
            }
        })
    }

    submitHandler = (e) => {
        // console.log(this.state)
        this.props.onSubmit({...this.state, id: uuidv4()})
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Item Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleName}></input>

                    <label>Item Price</label>
                    <input type="number" value={this.state.price} onChange={this.handlePrice}></input>

                    <label>Month</label>
                    <select value={this.state.month} onChange={this.handleMonth}>
                        {months.map((mon) => (
                            <option key={mon.name} value={mon.id}>{mon.name}</option>
                        ))}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
