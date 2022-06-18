import React, { Component } from 'react'

export default class ClassRef extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }


    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <div>ClassRef</div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}
