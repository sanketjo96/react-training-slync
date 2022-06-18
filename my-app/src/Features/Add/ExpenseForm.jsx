import React, { Component } from 'react'
import { months } from '../../Data/Months'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'
export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props?.data?.id || '',
            name: props?.data?.name || '',
            month: props?.data?.month || 1,
            price: props?.data?.price || '',
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
                price: parseInt(e.target.value, 10)
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
        this.props.onSubmit({
            ...this.state,
            ...(this.props.data.id ? {} : { id: uuidv4() })
        })
        e.preventDefault()
    }

    hanldeOnCancel = () => {
        this.props.onCancel()
    }


    render() {
        return (
            <div className='expense-form'>
                <form onSubmit={this.submitHandler}>
                    <div class="text-input">
                        <label>Item Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleName}></input>
                    </div>

                    <div class="text-input">
                        <label id="input2">Item Price</label>
                        <input  type="text" value={this.state.price} onChange={this.handlePrice}></input>

                    </div>

                    <div class="text-input">
                        <label>Month</label>
                        <select value={this.state.month} onChange={this.handleMonth}>
                            {months.map((mon) => (
                                <option key={mon.name} value={mon.id}>{mon.name}</option>
                            ))}
                        </select>
                    </div>

                    <button className="primary" type="submit">Submit</button>
                    <button onClick={this.hanldeOnCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}
