import React, { Component } from 'react'

const withCounter = (WrappedComponent) => {
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
                <WrappedComponent count={this.state.count} counterHandle={this.counterHandle}></WrappedComponent>
            )
        }
    }
    return Counter
}

export default withCounter;
