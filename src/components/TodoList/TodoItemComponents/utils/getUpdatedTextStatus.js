import { initSubTodoStatus } from "./initSubTodoStatus"

export const getUpdatedTextStatus = ({ todo, id, text, isDone }) => {

    return todo.map(item => {
        const newVal = !isDone
        return (
            item.id === id
                ? { ...item, isDone: newVal, text: newVal 
                    ? initSubTodoStatus({ arr:text, boolean:true })
                    : initSubTodoStatus({ arr:text, boolean:false })
                }
                : { ...item }
        )
    })
}