import React, { useEffect, useState } from 'react'

function FunWrongDep() {
  const [count, setCount] = useState(0)

  const IncCounter = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const timer = setInterval(IncCounter, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div><b>{count}</b></div>
  )
}

export default FunWrongDep