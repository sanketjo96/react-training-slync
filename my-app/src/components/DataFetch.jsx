import React, { useEffect, useState } from 'react'
import axios from 'axios'


/**
 * 
 * Note the network tab and detect what should be done.
 */
function DataFetch() {
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
                            <li>{post.title}</li>
                        ))}
                    </ul>
                )
            }
        </>
    )
}

export default DataFetch