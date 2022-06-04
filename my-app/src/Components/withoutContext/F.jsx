import React, { Component } from 'react'
import G from './G'

export default class F extends Component {
    render() {
        return (
            <div><G currency={this.props.currency}></G></div>
        )
    }
}
