import React, { Component } from 'react'
import { months } from '../../Data/Months'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'
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
        this.props.onSubmit({ ...this.state, id: uuidv4() })
        e.preventDefault()
    }


    render() {
        return (
            <div className='expense-form'>
                <form onSubmit={this.submitHandler}>
                    <div class="text-input">
                        <label for="input1">Item Name</label>
                        <input for="input1" type="text" value={this.state.name} onChange={this.handleName}></input>
                    </div>

                    <div class="text-input">
                        <label id="input2">Item Price</label>
                        <input for="input2" type="text" value={this.state.price} onChange={this.handlePrice}></input>

                    </div>

                    <div class="text-input">
                        <label>Month</label>
                        <select value={this.state.month} onChange={this.handleMonth}>
                            {months.map((mon) => (
                                <option key={mon.name} value={mon.id}>{mon.name}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
