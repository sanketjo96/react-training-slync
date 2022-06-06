import React, { useState } from 'react'

/**
 * 
 * There is issue here where you never get correct data from
 * both of inputs. How to fix this ? 
 */
export default function StateHookObject() {
    const [emp, setEmp] = useState({ fname: '', lname: '' })

    const fNameChange = (e) => {
        setEmp({ ...emp, fname: e.target.value })
    }

    const lNameChange = (e) => {
        setEmp({ ...emp, lname: e.target.value })
    }

    return (
        <div>
            Fanme: <input onChange={fNameChange} value={emp.fname}></input>
            LName: <input onChange={lNameChange} value={emp.lname}></input>
            <div>
                {JSON.stringify(emp)}
            </div>
        </div>
    )
}
