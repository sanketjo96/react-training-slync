import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      isError: true
    }
  }

  componentDidCatch(err) {
    console.log(err)
  }

  render() {
    return (
      <div>{this.state.isError ? <div>Something is wrong</div> : this.props.children}</div>
    )
  }
}
