import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class TextPortal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>Text Portal</div>,
      document.getElementById('sub-root')
    )
  }
}
