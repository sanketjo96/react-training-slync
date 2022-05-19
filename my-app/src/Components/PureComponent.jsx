import React, { PureComponent } from 'react'

export default class PureComponentWidget extends PureComponent {
  render() {
    console.log('PureComponentWidget component')
    return (
      <div>{this.props.name}</div>
    )
  }
}
