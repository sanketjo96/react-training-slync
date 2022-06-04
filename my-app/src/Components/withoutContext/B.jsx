import React, { Component } from 'react'
import D from './D'

export default class B extends Component {
    render() {
        return (
            <div>
                <D currency={this.props.currency}></D>
            </div>
        )
    }
}
