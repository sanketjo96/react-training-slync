import React from 'react'

export const Button = React.memo((props) => {
    console.log(`Button ${props.buttonvalue}: Render`)
    return (
        <button onClick={props.onClickHandle}>{props.buttonvalue}</button>
    )
})
