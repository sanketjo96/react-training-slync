import React, { Component } from 'react'

export default class Currency extends Component {
  render() {
    return (
      <div>{this.props.currency}</div>
    )
  }
}
