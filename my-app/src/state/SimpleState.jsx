import React, { Component } from 'react'

export default class SimpleState extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'Paul' }
    }

    // Keep aside how we are writing this function 
    // rather focus just on how we are writing setstate
    setDate = () => {
        this.setState({ name: 'Sanket' })
        
        /**
         * If you are calculating next state based on
         * current state, then its ideal to use callback syntax as
         * state updates are async
         */
        //  this.setState((prevState, props) => {
        //      return { name: prevState.name.charAt(0) + ' ' + prevState.name }
        //  });
    }


    render() {
        return (
            <div>
                <button onClick={this.setDate}>Click Me</button>
                <div>{this.state.name}</div>
            </div>

        )
    }
}
