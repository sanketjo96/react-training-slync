import React, { Component } from 'react'

/**
 * 1. Note how react is taking care of updating input elements based on state
 * 2. Note how even handler gets 'e' to track even data
 * 3. Note usage of preventDefault
 */
export default class MyForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: undefined,
            comment: '',
            gender: 'female'
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

    handleComment = (e) => {
        this.setState({ ...this.state, comment: e.target.value })
    }

    handleGender = (e) => {
        this.setState({ ...this.state, gender: e.target.value })
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
                    <div>
                        <label for="comment">Comment:</label>
                        <textarea value={this.state.comment} onChange={this.handleComment} rows="5" cols="33"></textarea>
                    </div>

                    <div>
                        <fieldset>
                            <legend>Gender</legend>
                            <div>
                                <input type="radio" id="male" value="male" checked={this.state.gender === 'male'} onChange={this.handleGender} />
                                <label for="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" value="female" checked={this.state.gender === 'female'} onChange={this.handleGender} />
                                <label for="female">Female</label>
                            </div>
                        </fieldset>

                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
