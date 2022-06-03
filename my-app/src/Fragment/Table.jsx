import React, { Component } from 'react'
import Col from './Col'

/**
 * Real life use-case to compose components
 * and fragment feels handy
 */
export default class Table extends Component {
    render() {
        return (
            <table border={1}>
                <tr>
                    <Col></Col>
                </tr>
                <tr>
                    <Col></Col>
                </tr>
            </table>
        )
    }
}
