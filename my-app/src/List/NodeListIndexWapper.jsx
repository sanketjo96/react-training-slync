import React, { Component } from 'react'
import './List.css';
import NodeListIndex from './NodeListIndex';

export default class NodeListIndexWapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nodes: props.nodes
        }
    }

    append = () => {
        this.setState((prevState) => {
            return { nodes: [...prevState.nodes, { id: 3, name: 'User' }] }
        });
    }

    prePend = () => {
        this.setState((prevState) => {
            return { nodes: [{ id: 3, name: 'User' }, ...prevState.nodes] }
        });
    }

    render() {
        return (
            <>
                <button onClick={this.append}>Append</button>
                <button onClick={this.prePend}>Pre-pend</button>
                <NodeListIndex nodes={this.state.nodes}></NodeListIndex>
            </>
        )
    }
}
