import React, { Component } from 'react'
import F from './F'

export default class E extends Component {
    render() {
        return (
            <div><F currency={this.props.currency}></F></div>
        )
    }
}
