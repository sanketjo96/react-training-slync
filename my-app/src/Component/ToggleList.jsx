import React, { Component } from 'react'
import { data } from '../data/Names'
import './Toggle.css'
import { withToggle } from './WithToggle'

class ToggleList extends Component {
    render() {
        return (
            <div>
                <div>
                    Name List
                    <span onClick={this.props.onToggle}>
                        <b> {this.props.toggle ? '-' : '+'}</b>
                    </span>
                </div>
                <ul className={this.props.toggle ? 'show' : 'hide'}>
                    {
                        data.map(obj => (
                            <li key={obj.id}>{obj.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default withToggle(ToggleList)