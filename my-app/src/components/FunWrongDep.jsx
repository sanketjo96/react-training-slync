import React, { useState } from 'react'

function FunWrongDep() {
  const [count, setCount] = useState(0)

  return (
    <div><b>{count}</b></div>
  )
}

export default FunWrongDep