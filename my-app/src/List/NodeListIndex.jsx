import React, { Component } from 'react'

export default class NodeListIndex extends Component {
    render() {
        return (
            <div className='list'>
                <ul>
                    {
                        this.props.nodes.map((node, index) => {
                            return (
                                <li key={index}>
                                    {index} {node.id} {node.name}
                                    <input></input>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
