import React, { Component } from 'react'
import { Child } from './Child';
import styles from './container.module.css';

/**
 * 1. Note how we named the css module (.module) and imported
 */
export default class ModuleContainer extends Component {
    render() {
        return (
            <>
                <div className={styles.container}>
                    <span>CSS Module Style</span>
                </div>
                <Child></Child>
            </>
        )
    }
}
