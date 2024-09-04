import { useState } from 'react';
import { useTodoItemContext } from '../../../../hooks';
import TICCProvider from '../context/todoItemChildContext'

export const TodoItemChildProvider = ({ children, info, childrenFullList, childIndex }) => {
    const { data, todo = [], setTodo, copyData, setCopyData, currentId, title } = useTodoItemContext();
    const { text, id, order: todoItemOrder, isDone } = data
    const [ changeStatus, setChangeStatus ] = useState(false)
    const { text:subtodoText, id:subtodoId, status:subtodoStatus, order:todoItemChildOrder, status } = info

    const lastChildChildren = childIndex === childrenFullList.length - 1
        ? 'todo-item-text-block_last-child'
        : ''

    const firstChildChildren = childIndex === 0
    ? 'todo-item-text-block_first-child'
    : ''


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
                title,
                lastChildChildren,
                firstChildChildren,
                childrenFullList
            }}
        >
            { children }
        </TICCProvider>
    )
}