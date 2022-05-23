import React, { Component } from 'react'
import CustomTextInput from './CustomTextInput'

/**
 * 1. Note the way we are accessing child instance and triggering its
 * method.
 */
export default class InputParent extends Component {
    constructor() {
        super()
        this.customInput = React.createRef()
    }

    focusTextInput = () => {
        this.customInput.focusTextInput()
    }

    render() {
        return (
            <div> <CustomTextInput ref={this.customInput}></CustomTextInput></div>
        )
    }
}
