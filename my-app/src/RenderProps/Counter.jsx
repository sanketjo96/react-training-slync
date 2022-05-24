import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    counterHandle = () => {
        this.setState({ count: ++this.state.count })
    }

    render() {
        return (
            <>
                {this.props.render(this.state.count, this.counterHandle)}
            </>
        )
    }
}

export default Counter;
