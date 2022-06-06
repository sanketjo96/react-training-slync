import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

export default function User() {
    const [posts, setPosts] = useState([])
    const [err, setErr] = useState(false)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(res => {
            setPosts(res.data)
        }).catch((e) => {
            setErr(true)
        })
    }, [])

    return (
        <>
            {
                err
                    ? <div>Something is wrong in API</div>
                    : (
                        <ul>
                            {posts.map(post => (
                                <Post 
                                    key={post.id} 
                                    name={post.title} 
                                    id={post.id} 
                                    setErr={setErr}></Post>
                            ))}
                        </ul>
                    )
            }
        </>
    )
}
