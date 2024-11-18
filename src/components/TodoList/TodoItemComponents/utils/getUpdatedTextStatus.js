import { initSubTodoStatus } from "./initSubTodoStatus"

export const getUpdatedTextStatus = ({ todo, id, text, isDone }) => {

    return todo.map(item => {
        const newVal = !isDone
        return (
            item.id === id
                ? { ...item, isDone: newVal, text: initSubTodoStatus({ arr:text, boolean: newVal})
                }
                : { ...item }
        )
    })
}