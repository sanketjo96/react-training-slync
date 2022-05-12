import React, { Component } from 'react'

const styleProps = {
    marginTop: '10px',
    color: 'red',
    backgroundColor: 'yellow'
}

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
