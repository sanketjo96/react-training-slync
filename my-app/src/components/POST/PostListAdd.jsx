import React, { Component } from 'react'
import axios from 'axios';

export class PostListAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: this.state.title,
            body:  this.state.body,
            userId:  this.state.userId,
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input onChange={(e) => this.setState(prev => ({ ...prev, userId: e.target.value }))}></input>
                <input onChange={(e) => this.setState(prev => ({ ...prev, title: e.target.value }))}></input>
                <input onChange={(e) => this.setState(prev => ({ ...prev, body: e.target.value }))}></input>

                <button type="submit">Sumit</button>
            </form>
        )
    }
}

export default PostListAdd