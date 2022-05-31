import React, { useState } from 'react'
import FunctionMouse from './FunctionMouse'

function FunMouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
      <>
          <button onClick={() => setDisplay(!display)}>Toggle Display</button>
          {display && <FunctionMouse></FunctionMouse>}
      </>
  )
}

export default FunMouseContainer