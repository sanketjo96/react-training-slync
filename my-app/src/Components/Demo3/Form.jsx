import React from 'react'
import { useInput } from '../../Hooks/useInput'

export default function Form() {
    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')

    const [name, nameBind] = useInput('')
    const [age, ageBind] = useInput('')

    const submit = (e) => {
        e.preventDefault()
        alert(`Form submit with ${name} ${age}`)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Name</label>
                    <input type="text" {...nameBind}></input>
                </div>

                <div>
                    <label>Age</label>
                    <input type="number" {...ageBind}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
