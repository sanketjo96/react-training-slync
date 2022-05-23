import React, { Component } from 'react'

/**
 * 1. Note how we are using forwardRef to pass ref and attach
 * to DOM of child's component
 */
class CustomTextInputInternal extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.props.internalRef} />
            </div>
        )
    }
}

const CustomTextInput = React.forwardRef((props, ref) => {
    return <CustomTextInputInternal {...props} internalRef={ref}></CustomTextInputInternal>
})

export default CustomTextInput;