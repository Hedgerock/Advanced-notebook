import { useTodoItemContext } from "../../../../hooks";
import { useTitleBoxContext } from "../../hooks";

import './TodoItemTitle.css';

export const TodoItemTitle = () => {
    const { editStatus, setEditStatus } = useTitleBoxContext();

    const { data, isChangable } = useTodoItemContext();
    const { title, id } = data
    const currentTitle = title || `Todo collection number ${ id }`;

    return (
        <h3
            title={ isChangable ? `Edit title: ${ currentTitle }` : 'Title edition is not available' }
            className="todo-item__title"
            contentEditable = { editStatus }
            onClick={ () => {
                if (!isChangable) return;
                setEditStatus(true)
            } }
        >{ currentTitle }
        </h3>
    )
}