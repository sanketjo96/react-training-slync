import React, { Component } from 'react'

export default class NodeList extends Component {
    render() {
        return (
            <div className='list'>
                <ul>
                    {
                        this.props.nodes.map(node => {
                            return (
                                <li key={node.id}>{node.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
