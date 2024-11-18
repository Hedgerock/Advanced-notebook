import { useState } from "react";
import TodoItemProvider from '../../../context/todoItemContext';
import { useChangeValue, useGetPresentationAndNewSubtodoData, useInitNewSubTodo, useTodoContext, useTodoItemState } from "../../hooks";
import { getTodoData } from "../TodoItemComponents/utils";
import { useGetCalculations } from "../hooks";

export const TodoItemParent = ({ children, data, index, fullData, isChangable = true, isSingleNotation = false }) => {
    const { isDone, id, text, title } = data;
    const { 
        setTodo, 
        todo, 
        notificationData, 
        setNotificationData, 
        currentId, 
        initNewNotification, 
        searchParam, 
        setSearchParam,
        buttonIcons,
        allNotations
    } = useTodoContext();
    const [ changeStatus, setChangeStatus ] = useState(false);

    const { 
        newSubtodos, 
        setNewSubtodos, 
        presentationData, 
        setPresentationData,
        maxId
    } = useGetPresentationAndNewSubtodoData({ data, index, todo });

    const { initNewSubTodo } = useInitNewSubTodo({ newSubtodos, id });
    
    const unfinishedTodos = getTodoData({ data: text, isReversed:false, filteredKey:'status', boolean:false });
    const finishedTodos = getTodoData({ data: text, isReversed:false, filteredKey:'status', boolean:true });

    const lastChildClassName = index === fullData.length - 1 ? 'todo-item_current-last-child' : '';

    const [ createSubTodoModal, setCreateSubTodoModal ] = useState(false);
    const { filteredSubTodos, calcObject } = useGetCalculations({ text });
    
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
                    id,
                    text,
                    index,
                    fullData,
                    lastChildClassName,
                    searchParam,
                    setSearchParam,
                    buttonIcons,
                    createSubTodoModal, 
                    setCreateSubTodoModal,
                    newSubtodos, 
                    setNewSubtodos,
                    isChangable,
                    presentationData, 
                    setPresentationData,
                    maxId,
                    filteredSubTodos, 
                    calcObject,
                    allNotations,
                    isSingleNotation
                }
            }
        >
            { children }
        </TodoItemProvider>
    )
}