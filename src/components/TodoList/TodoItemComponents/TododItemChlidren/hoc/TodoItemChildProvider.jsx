import { useEffect, useState } from 'react';
import { useTodoItemContext } from '../../../../hooks';
import TICCProvider from '../context/todoItemChildContext'
import { initialNotation, todoFormInterface } from '../../../../../data';

export const TodoItemChildProvider = ({ children, info, childrenFullList, childIndex }) => {
    const { 
        data, 
        todo = [], 
        setTodo, 
        notificationData, 
        setNotificationData, 
        currentId, 
        initNewNotification, 
        title, 
        searchParam, 
        setSearchParam,
        buttonIcons,
        isChangable,
        curEl
    } = useTodoItemContext();
    const { text, id, order: todoItemOrder, isDone } = data
    const [ changeStatus, setChangeStatus ] = useState(false);
    const [ editNotationHandler, setEditNotationHandler ] = useState(false);
    const { text:subtodoText, id:subtodoId, status:subtodoStatus, order:todoItemChildOrder, status, notation, count } = info
    const [ subTodoValue, setSubTodoValue ] = useState(subtodoText)


    const actualNotation = Array.isArray(notation) ? notation : initialNotation.value
    const currentNotation = { status: true, value: actualNotation };

    const [ notations, setNotations ] = useState([todoFormInterface({ id: subtodoId, content: subtodoText, notation: currentNotation })])

    const myNotations = notations[0];

    useEffect(() => {
        setSubTodoValue(subtodoText)
    }, [subtodoText])

    useEffect(() => {
        const currentNotation = Array.isArray(notation) 
            ? { status: true, value: notation.length ? notation : initialNotation.value } 
            : { value: initialNotation.value, status: true }

        setNotations(prev => ([{...prev[0], content: subtodoText, notation: currentNotation}]))
    }, [notation, subtodoText])

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
                notificationData, 
                setNotificationData, 
                currentId, 
                initNewNotification,
                title,
                lastChildChildren,
                firstChildChildren,
                childrenFullList,
                searchParam,
                setSearchParam,
                childIndex,
                buttonIcons,
                subTodoValue, 
                setSubTodoValue,
                notation: actualNotation,
                isChangable,
                curEl,
                editNotationHandler, 
                setEditNotationHandler,
                myNotations,
                notations,
                setNotations,
                count
            }}
        >
            { children }
        </TICCProvider>
    )
}