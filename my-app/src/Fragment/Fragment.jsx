import React, { Component } from 'react'

export class Fragment extends Component {
    render() {
        /**
         * - JSX need single root element
         * - Wrapper div seems odd
         */
        return (
            <div>
                <div>Fragment1</div>
                <div>Fragment2</div>
            </div>
        )
    }
}
