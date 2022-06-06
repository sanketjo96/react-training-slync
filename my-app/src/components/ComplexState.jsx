import React, { useState } from 'react'

export default function ComplexState() {
    const [person, setPerson] = useState({
        friendCount: 0,
        friend: [],
        currentFriend: '',
        details: {
            name: '',
            age: 33
        },
    })

    const onChangeName = (e) => {
        setPerson({
            ...person,
            details: {
                ...person.details,
                name: e.target.value
            }
        })
    }

    const onChangAge = (e) => {
        setPerson({
            ...person,
            details: {
                ...person.details,
                age: e.target.value
            }
        })
    }

    const onChangeFriend = (e) => {
        setPerson({
            ...person,
            currentFriend: e.target.value
        })
    }

    const addFriend = () => {
        setPerson((prevPerson) => ({
            ...prevPerson,
            friendCount: prevPerson.friendCount + 1,
            friend: [
                ...prevPerson.friend,
                prevPerson.currentFriend
            ]
        }))
    }

    return (
        <div>
            Fname: <input onChange={onChangeName}></input>
            Age: <input type="number" onChange={onChangAge}></input>
            <div>
                Friend: <input onChange={onChangeFriend}></input>
                <button onClick={addFriend}>Add Friend</button>
            </div>
            <div>
                {JSON.stringify(person)}
            </div>
        </div>
    )
}
