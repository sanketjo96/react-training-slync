import React from 'react'

export const Title = React.memo((props) => {
    console.log(`Title: Render`)
    return (
        <div>{props.children}</div>
    )
})
