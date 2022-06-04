import React, { Component } from 'react'
import { withToggle } from './WithToggle'

class InputParaCombo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'Sample Data'
        }
    }

    inputChange = (e) => {
        this.setState((prev) => ({ ...prev, data: e.target.value }))
    }

    render() {
        return (
            <div>
                {
                    this.props.toggle
                        ? <p onClick={(e) => this.props.onToggle(e, false)}>{this.state.data}</p>
                        : <input
                            type="text"
                            value={this.state.data}
                            onChange={this.inputChange}
                            onBlur={(e) => this.props.onToggle(e, true)}>
                        </input>
                }
            </div>
        )
    }
}

export default withToggle(InputParaCombo)