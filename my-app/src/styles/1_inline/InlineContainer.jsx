import React, { Component } from 'react'

const styleProps = {
    marginTop: '10px',
    color: 'red',
    backgroundColor: 'yellow'
}

/**
 * 1. Note how style attribute used for assigning inline styles
 * 2. Note camel case of style props (its kabab case in css)
 */
export default class InlineContainer extends Component {
    render() {
        return (
            <>
                <div style={styleProps}>
                    <span>Inline styles</span>
                </div>
            </>

        )
    }
}
