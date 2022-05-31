import React, { useState } from 'react'
import FunctionMouse from '../FunctionMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
      <>
          <button onClick={() => setDisplay(!display)}>Toggle Display</button>
          {display && <FunctionMouse></FunctionMouse>}
      </>

  )
}

export default MouseContainer