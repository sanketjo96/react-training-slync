import React, { Component } from 'react'
import './Post.css'

/**
 * 1. Note usdage of https://jsonplaceholder.typicode.com/
 * 2. Note setState under promise success
 * 3. Error handling
 */
class PostListFetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            err: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts1')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw Error('API error!!')
                }
            })
            .then((data) => {
                console.log('2nd then', data)
                this.setState((prev) => ({ ...prev, posts: data }))
            }).catch(e => {
                this.setState((prev) => ({ ...prev, err: true }))
                console.log('catch', e)
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

export default PostListFetch