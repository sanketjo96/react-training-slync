import React, { Component } from 'react'
import './List.css';

class PerfList extends Component {
    render() {
        return (
            <div className='list'>
                <ul>
                    {
                        this.props.nodes.map(node => {
                            return (
                                <li key={node}>{node}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default class PerfListWapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nodes: props.nodes
        }
    }

    append = () => {
        this.setState((prev, props) => {
            return { nodes: [...prev.nodes, 'User'] }

            /**
             * Un-optimized update 
             */
            // return {nodes: ['User', ...prev.nodes]}
        });
    }

    render() {
        return (
            <>
                <button onClick={this.append}>Append</button>
                <PerfList nodes={this.state.nodes}></PerfList>
            </>
        )
    }
}
