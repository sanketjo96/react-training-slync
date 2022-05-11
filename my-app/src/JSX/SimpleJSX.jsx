import React, { Component } from 'react'

const user = {
    firstName: 'Abdul',
    lastName: 'Kalam'
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

export default class SimpleJSX extends Component {
    render() {
        return (
            <h1>
                Hello, {formatName(user)}!
            </h1>
        )
    }
}
