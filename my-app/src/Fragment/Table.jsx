import React, { Component } from 'react'

/**
 * Real lif use-case to compose components
 * and fragment feels handy
 */
export default class Table extends Component {
    render() {
        return (
            <table border={1}>
                <tr>
                    <td>Hello</td>
                    <td>World</td>
                </tr>
                <tr>
                    <td>Hello1</td>
                    <td>World2</td>
                </tr>
            </table>
        )
    }
}
