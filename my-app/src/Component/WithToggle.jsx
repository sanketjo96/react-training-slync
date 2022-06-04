import React, { Component } from "react";

export const withToggle = InputComponent => {
    class ToggleClass extends Component {
        constructor(props) {
            super(props)

            this.state = {
                toggle: true
            }
        }

        onToggle = (e, status) => {
            this.setState((prevState) => ({ toggle: status ? status : !prevState.toggle }))
        }

        render() {
            return <InputComponent toggle={this.state.toggle} onToggle={this.onToggle} ></InputComponent>
        }
    }

    return ToggleClass
}