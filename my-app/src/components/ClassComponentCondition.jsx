import React, { Component } from 'react'

/**
 * 1. Note how we are updating doc title even though we are changing name from state
 * 2. This is unecessary. One solution is to compair prevstate with current state of count (try that)
 */
export default class ClassComponentCondition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        console.log('Updating document title from componentDidMount')
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title from componentDidUpdate')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <>
                <input value={this.state.name} onChange={this.handleChange}></input>
                <div onClick={this.handleClick}>Click on ClassComponent</div>
            </>
        )
    }
}
