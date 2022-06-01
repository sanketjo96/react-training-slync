import React from 'react'

export default function Counter(props) {
  return (
    <div>
      {props.name} Count: {props.count}
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
}
