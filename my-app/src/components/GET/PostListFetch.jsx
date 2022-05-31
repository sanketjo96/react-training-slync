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
            postList: [],
            isErr: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.json())
            // this.setState({ postList: res.data })
        }).catch(e => {
            console.log(e)
            // this.setState((prev) => ({ ...prev, isErr: true }))
        })
    }

    render() {
        return (
            this.state.isErr ? <span>Some Error occurred</span> : (
                this.state.postList.map((post, index) => (
                    <div className="newsPost" key={post.id}>
                        <span>Title {index + 1}  {post.title}</span>
                    </div>
                ))
            )
        )
    }
}

export default PostListFetch