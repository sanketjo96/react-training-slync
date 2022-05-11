import React, { Component } from 'react'

/**
 * 1. Props enable dynamicity in component
 * 2. Props get passed to the component 
 * */ 
export default class SimpleTable extends Component {
    render() {
        
        // props are immutable
        // this.props.border = 100;
        return (
            <table border={this.props.border ? this.props.border : 1} >
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Runs</th>
                </thead>
                <tbody>
                    <tr>
                        <td>99</td>
                        <td>SACHIN</td>
                        <td>200*</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>VIRU</td>
                        <td>250</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
