import React, { Component } from 'react'

export default class Currency extends Component {
  render() {
    return (
      <div style={{color: this.props.theam}}>{this.props.currency}</div>
    )
  }
}
