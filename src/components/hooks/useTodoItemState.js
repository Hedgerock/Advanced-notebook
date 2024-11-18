import { useEffect, useState } from "react";

export const useTodoItemState = ({ isDone, setTodo, id }) => {

    const [ status, setStatus ] = useState(isDone);

    const actualClassName = `todo-item ${ status ? 'todo-item_completed': '' }`

    useEffect(() => {
        setTodo(prev => {
            return prev.map(item => item.id === id 
                ? { ...item, isDone: status } 
                : { ...item }
            )
        })
    }, [status, id, setTodo])

    return { status, setStatus, actualClassName }
}