import React, { Component } from 'react'
import CustomTextInput from './CustomTextInput'

/**
 * 1. Note the way we are accessing Child's DOM from parent
 */
export default class InputParent extends Component {
    constructor() {
        super()
        this.customInput = React.createRef()
    }

    focusTextInput = () => {
        this.customInput.current.focus()
    }

    render() {
        return (
            <div>
                <CustomTextInput ref={this.customInput}></CustomTextInput>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}
