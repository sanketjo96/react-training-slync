import React, { Component } from 'react'

export default class Car extends Component {
    render() {
        if (!this.props.name) {
            throw new Error('Not an car Name!!')
        }
        return (
            <div>{this.props.name}</div>
        )
    }
}
