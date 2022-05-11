import React from 'react'

const SwipeGate = props => {
    const { emp } = props
    return (
        <div>
            <h2>{emp.name}</h2>
            <p>{emp.role}</p>
            <p>{emp.loc}</p>
        </div>
    )
}

export default SwipeGate