import React from 'react'

export default function Counter(props) {
    return (
        <div>
            <div>{props.label}: {props.count}
                {
                    props.isEven !== undefined
                    ? <span>{props.isEven ? ' Even' : ' odd'}</span>
                    : <></>
                }
            </div>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
}
