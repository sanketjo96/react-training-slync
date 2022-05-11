import React, { Component } from 'react'

const user = {
    firstName: 'Abdul',
    lastName: 'Kalam',
    title: 'Sir APJ Kalam',
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

/**
 * 1. You can write JSX in any react component with React in context (see getGreeting)
 * 1. Can use conditions inside JSX
 * 2. Specifying Attributes with JSX
 */

 function getGreeting(user) {
    if (user) {
      return <h1 title={user.title}>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

export default class IntermJSX extends Component {
  render() {
    return (
        <h1>
            {getGreeting(user)}
        </h1>
    )
  }
}
