import React, { Component } from 'react'

/**
 * See usage of life cycle hooks to cause side effects
 */
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div onClick={this.handleClick}>ClassComponent</div>
        )
    }
}
