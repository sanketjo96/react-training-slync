import React, { Component } from 'react'
import Modal from './Modal'
import './Parent.css'


/**
 * Note
 * 1. Removing child from portal applies parent styles to modal (which looks odd)
 * 2. Event bubling still works eventhough parent and modal child is not under same DOM sub tree
 * see contentClick
 */
export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            contentClickCount: 0,
            showModal: false
        }
    }

    showModal = () => {
        this.setState({ ...this.state, showModal: true })
    }

    closeModal = () => {
        this.setState({ ...this.state, showModal: false })
    }

    contentClick = (e) => {
        if (e.target.id === 'modal-content') {
            this.setState({ ...this.state, contentClickCount: ++this.state.contentClickCount })
        }

    }

    render() {
        return (
            <div className='container' onClick={this.contentClick}>
                <div>
                    Close count {this.state.contentClickCount}
                </div>
                <button onClick={this.showModal}>Open Modal</button>
                <Modal open={this.state.showModal} closeModal={this.closeModal}></Modal>
            </div>
        )
    }
}
