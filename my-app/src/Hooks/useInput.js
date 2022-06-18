import { useState } from "react"

export const useInput = (intialValue) => {
    const [value, setValue] = useState(intialValue)
    const bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value)
        }
    }

    return [value, bind]
}