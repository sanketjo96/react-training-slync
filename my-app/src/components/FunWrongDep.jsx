import React, { useEffect, useState } from 'react'

function FunWrongDep() {
  const [count, setCount] = useState(0)

  const setValue = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const timer = setInterval(setValue, 2000)
    return () => clearInterval(timer)
  }, [count])

  return (
    <div><b>{count}</b></div>
  )
}

export default FunWrongDep


