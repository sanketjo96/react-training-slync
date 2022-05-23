import React, { Component } from 'react'
import Modal from './Modal'
import './Parent.css'


/**
 * Note
 * 1. Removing child from portal applies parent styles to modal (which looks odd)
 * 2. Event bubling still works eventhough parent and modal child is not under same DOM sub tree
 */
export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            closeCount: 0,
            showModal: false
        }
    }

    showModal = () => {
        this.setState({ ...this.state, showModal: true })
    }

    closeModal = (e) => {
        this.setState({ closeCount: ++this.state.closeCount, showModal: false })   
    }

    render() {
        return (
            <div className='container'>
                <div>
                    Close count {this.state.closeCount}
                </div>
                <button onClick={this.showModal}>Open Modal</button>
                <Modal open={this.state.showModal} closeModal={this.closeModal}></Modal>
            </div>
        )
    }
}
