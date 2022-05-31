import React, { Component } from 'react'
import ComponentE from './ComponentE'

export default class ComponentC extends Component {
  render() {
    return (
      <>
        <div>Component C</div>
        <ComponentE currency={this.props.currency}></ComponentE>
      </>
    )
  }
}
