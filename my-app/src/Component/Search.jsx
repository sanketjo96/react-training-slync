import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <input value={this.props.searchKey} onChange={this.props.onChangeHandle}></input>
        )
    }
}
