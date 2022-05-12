import React from 'react'

export default function Child(props) {
  return (
    <button onClick={(e) => props.parentHanler('Hi, from child', e)}>Click Me</button>
  )
}
