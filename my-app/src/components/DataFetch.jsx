import React, { useEffect, useState } from 'react'
import axios from 'axios';

/**
 * 
 * Note the network tab and detect what should be done.
 */
function DataFetch() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setPosts(res.data)
    })
    .catch(e => console.log(e))
  })

  return (
    <div>
      {posts.map(post => (
        <div>{post.title}</div>
      ))}
    </div>
  )
}

export default DataFetch