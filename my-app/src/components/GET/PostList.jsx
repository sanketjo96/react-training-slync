import React, { Component } from 'react'
import axios from 'axios';
import './Post.css'

/**
 * 1. Note usdage of https://jsonplaceholder.typicode.com/
 * 2. Note setState under promise success
 * 3. Error handling
 */
export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            err: false
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            const { data } = res
            this.setState((prev) => ({ ...prev, posts: data }))
        }).catch(e => {
            this.setState((prev) => ({ ...prev, err: true }))
            console.log(e)
        })
    }

    render() {
        return this.state.err ? <>API Err</> : (this.state.posts.length ? (
            <ol>
                {this.state.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>

        ) : <>No Data</>)
    }
}

export default PostList