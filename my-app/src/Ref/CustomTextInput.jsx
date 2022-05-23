import React, { Component } from 'react'


/**
 * 1. Note the way we are creating a ref using createRef, attaching to node and acting 
 * 2. Test with callback method (diff btwn using current and direct access)
 */
export default class CustomTextInput extends Component {
    constructor() {
        super()
        this.textInput = React.createRef()
    }

    focusTextInput = () => {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}
