import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map(player => {
                        return <div key={player.id}>{player.id} - {player.name}</div>
                    })
                }
            </div>
        )
    }
}
