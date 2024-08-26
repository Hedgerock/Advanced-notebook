import { useEffect, useState } from "react";

export const useTodoItemState = ({ isDone, setTodo, todo, id }) => {

    const [ status, setStatus ] = useState(isDone);

    const actualClassName = `todo-item ${ status ? 'todo-item_completed': '' }`

    useEffect(() => {
        setTodo(todo.map(item => item.id === id ? { ...item, isDone: status } : { ...item }))
    }, [status])

    return { status, setStatus, actualClassName }
}