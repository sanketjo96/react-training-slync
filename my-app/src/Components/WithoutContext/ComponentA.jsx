import React, { Component } from 'react'
import Currency from './Currency'

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                Component A
                <Currency currency={this.props.currency}></Currency>
            </div>
        )
    }
}
