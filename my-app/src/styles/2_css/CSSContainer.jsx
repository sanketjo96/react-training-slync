import React, { Component } from 'react'
import { Child } from './Child';
import './container.css';

export default class CSSContainer extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <span>CSS Style</span>
                </div>
                {/* <Child></Child> */}
            </>
        )
    }
}

/**
 * Notice that its hard to create scoping
 * of same name classes. You can still do that
 * by keeping name different.
 */
