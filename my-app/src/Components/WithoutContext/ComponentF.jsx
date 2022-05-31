import React, { Component } from 'react'
import Currency from './Currency'

export default class ComponentF extends Component {
    render() {
        return (
            <div>Component F
                <Currency currency={this.props.currency}></Currency>
            </div>
        )
    }
}
