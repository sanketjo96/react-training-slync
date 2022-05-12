import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        message: 'Parent'
    }
  }

  parentHanler = (childMsg) => {
      console.log(`In ${this.state.message} - ${childMsg}`)
  }

  render() {
    return (
      <Child parentHanler={this.parentHanler}></Child>
    )
  }
}
