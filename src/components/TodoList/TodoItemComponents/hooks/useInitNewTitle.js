import { useState } from "react"

export const useInitNewTitle = ({ title, id }) => {

    const [ editStatus, setEditStatus ] = useState(false)
    const [ titleValue, setTitleValue ] = useState(title)

    const updateTitle = ({ data }) => {

        return (
            data.map(item => item.id === id 
                ? {...item, title: titleValue ? titleValue : `Todo collection number ${ id }`} 
                : {...item})
        )
    }

    return { editStatus, setEditStatus, titleValue, setTitleValue, updateTitle }
}