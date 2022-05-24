import React, { Component } from 'react'
import { Child } from './Child';
import './container.css';

/**
 * 1. Note how we imported external style sheet (with support of CRA imports)
 * 2. Note camel case of style props (its kabab case in css)
 */
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
 * 3. What if we have element with className: container in child component
 * but required to be styled differently ?
 * */
