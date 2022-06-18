import React from 'react'

export const Count = React.memo((props) => {
    console.log(`${props.title} Count: Render`)
    return (
        <div>
            {props.title}: {props.value}
        </div>
    )
})
