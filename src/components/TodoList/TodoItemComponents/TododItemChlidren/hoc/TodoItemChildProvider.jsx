import { useState } from 'react';
import { useTodoItemContext } from '../../../../hooks';
import TICCProvider from '../context/todoItemChildContext'

export const TodoItemChildProvider = ({ children, info }) => {
    const { data, todo = [], setTodo, copyData, setCopyData, currentId, title } = useTodoItemContext();
    const { text, id, order: todoItemOrder, isDone } = data
    const [ changeStatus, setChangeStatus ] = useState(false)
    const { text:subtodoText, id:subtodoId, status:subtodoStatus, order:todoItemChildOrder, status } = info

    return (
        <TICCProvider
            value={{
                todo,
                setTodo,
                text,
                id,
                todoItemOrder,
                isDone,
                changeStatus,
                setChangeStatus,
                subtodoText,
                subtodoId,
                subtodoStatus,
                todoItemChildOrder,
                status,
                copyData, 
                setCopyData, 
                currentId,
                title
            }}
        >
            { children }
        </TICCProvider>
    )
}