import React, { Component } from 'react'
import List from '../Component/List'
import Search from '../Component/Search'
import { Team } from '../Data/Players'

export default class FilterList extends Component {
    constructor() {
        super()
        this.state = {
            searchKey: '',
            list: Team,
        }
    }

    onChangeHandle = (e) => {
        this.setState((preState) => {
            return {
                ...preState,
                searchKey: e.target.value,
            }
        })
    }

    render() {
        return (
            <div>
                <Search searchKey={this.state.searchKey} onChangeHandle={this.onChangeHandle}></Search>
                <List list={this.state.list.filter(item => item.name.includes(this.state.searchKey))}></List>
            </div>
        )
    }
}
