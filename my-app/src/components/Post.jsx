import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Post(props) {
    const [comments, setComments] = useState([])
    const [postIdToLoadComments, setPostIdToLoadComments] = useState(undefined)

    useEffect(() => {
        if (postIdToLoadComments) {
            axios({
                method: 'get',
                url: `https://jsonplaceholder.typicode.com/posts/${postIdToLoadComments}/comments`
            }).then(res => {
                setComments(res.data)
            }).catch((e) => {
                props.setErr(true)
            })
        }
    }, [postIdToLoadComments])

    return (
        <li>
            {props.name}
            <button onClick={() => setPostIdToLoadComments(props.id)}>Load Comments</button>
            {comments.length ? comments.length : 0}
        </li>
    )
}
