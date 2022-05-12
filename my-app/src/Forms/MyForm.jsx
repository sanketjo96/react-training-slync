import React, { Component } from 'react'

export default class MyForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: undefined
        }
    }

    handleName = (e) => {
        this.setState((prevState, props) => {
            return {
                ...prevState,
                name: e.target.value
            }
        })
    }

    handleAge = (e) => {
        this.setState((prevState, props) => {
            return {
                ...prevState,
                age: e.target.value
            }
        })
    }

    submit = (e) => {
        console.log(this.state)
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleName}></input>
                    </div>

                    <div>
                        <label>Age</label>
                        <input type="number" value={this.state.age} onChange={this.handleAge}></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        )
    }
}
