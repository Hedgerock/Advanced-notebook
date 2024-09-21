import React from "react";

import './DeletedTodoList.css';
import { useDeletedTodosContext } from "../../../../hooks";

export const DeletedTodoList = ({ children }) => {
    const { data: item } = useDeletedTodosContext();

    return (
        <ul className="deleted-todo-list">
            { item.text.filter(el => el.deleted).map(el => (
            <DataWrapper key={ el.id } data = { el }>
                { children }
            </DataWrapper>
            )) }
        </ul>
    )
}

const DataWrapper = ({ data, children }) => {
    return React.cloneElement(children, { data });
}