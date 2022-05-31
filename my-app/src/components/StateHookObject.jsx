import React, { useState } from 'react'

/**
 * 
 * There is issue here where you never get correct data from
 * both of inputs. How to fix this ? 
 */
export default function StateHookObject() {
    const [form, setForm] = useState({ firstName: '', lastName: '' })
    const fnameHandler = (e) => {
        setForm((prev) => ({
            firstName: e.target.value
        }))
    }

    const lnameHandler = (e) => {
        setForm((prev) => ({
            lastName: e.target.value
        }))
    }

    return (
        <div>
            <form>
                <label>
                    First Name
                </label>
                <input id="fn" onChange={fnameHandler} value={form.firstName}></input>
                <label>
                    Last Name
                </label>
                <input id="ln" onChange={lnameHandler} value={form.lastName}></input>
                <div>
                   {JSON.stringify(form)}
                </div>
            </form>
        </div>
    )
}
