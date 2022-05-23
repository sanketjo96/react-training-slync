import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

/**
 * Note
 * 1. How modal is toggling on parent state
 * 2. Modal has been portaled to diffrent root node
 */
export default class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className={this.props.open ? 'modal show-modal' : 'modal'}>
        <div className='modal-content '>
          <span class="close" onClick={this.props.closeModal}>&times;</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>,
      document.getElementById('portal-root')
    )
  }
}
