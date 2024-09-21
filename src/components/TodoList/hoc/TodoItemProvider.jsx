import { useState } from "react";
import TodoItemProvider from '../../../context/todoItemContext';
import { useChangeValue, useInitNewSubTodo, useTodoContext, useTodoItemState } from "../../hooks";
import { getTodoData } from "../TodoItemComponents/utils";

export const TodoItemParent = ({ children, data, index, fullData }) => {
    const { isDone, id, text, title } = data;
    const { setTodo, todo, notificationData, setNotificationData, currentId, initNewNotification, searchParam, setSearchParam } = useTodoContext();
    const [ changeStatus, setChangeStatus ] = useState(false);
    const { subValue, setSubValue, initNewSubTodo } = useInitNewSubTodo();
    
    const unfinishedTodos = getTodoData({ data: text, isReversed:false, filteredKey:'status', boolean:false });
    const finishedTodos = getTodoData({ data: text, isReversed:false, filteredKey:'status', boolean:true });

    const lastChildClassName = index === fullData.length - 1 ? 'todo-item_current-last-child' : '';
    
    const { 
        currentVal, 
        setCurrentVal, 
        curEl, 
        curTextVal, 
        currentValId, 
        subTodo, 
        setSubTodo
    } = useChangeValue({ text, id, changeStatus, setChangeStatus });

    const { status, setStatus, actualClassName } = useTodoItemState({ isDone, setTodo, todo, id });

    return (
        <TodoItemProvider
            value = {
                {
                    setTodo,
                    todo,
                    changeStatus,
                    setChangeStatus,
                    status,
                    setStatus,
                    actualClassName,
                    data,
                    currentVal,
                    setCurrentVal,
                    curEl, 
                    curTextVal, 
                    currentValId,
                    subValue, 
                    setSubValue, 
                    initNewSubTodo,
                    subTodo, 
                    setSubTodo,
                    unfinishedTodos,
                    finishedTodos,
                    notificationData, 
                    setNotificationData, 
                    currentId, 
                    initNewNotification,
                    title,
                    index,
                    lastChildClassName,
                    searchParam,
                    setSearchParam
                }
            }
        >
            { children }
        </TodoItemProvider>
    )
}