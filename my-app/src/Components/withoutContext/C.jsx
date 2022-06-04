import React, { Component } from 'react'
import E from './E'

export default class C extends Component {
    render() {
        return (
            <div>
                <E currency={this.props.currency}></E>
            </div>
        )
    }
}
