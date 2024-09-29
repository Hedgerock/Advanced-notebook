import React from "react";

import './DeletedTodoList.css';
import { useDeletedTodosContext } from "../../../../hooks";
import DeletedTodoListItemProvider from '../../../../../context/deletedTodoListItemcontext';

export const DeletedTodoList = ({ children }) => {
    const { data: item, setTodo } = useDeletedTodosContext();

    return (
        <ul className="deleted-todo-list">
            { item.text.filter(el => el.deleted).map(el => (
                <DeletedTodoListItemProvider 
                    key = { el.id } 
                    value = { { data: el, setTodo } }
                >
                    { children }
                </DeletedTodoListItemProvider>
            )) }
        </ul>
    )
}