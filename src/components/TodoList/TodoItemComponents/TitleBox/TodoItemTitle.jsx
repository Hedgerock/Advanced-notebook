import { useTodoItemContext } from "../../../hooks";

export const TodoItemTitle = ({ setEditStatus, editStatus }) => {
    const { data } = useTodoItemContext();
    const { title, id } = data
    const currentTitle = title || `Todo collection number ${ id }`;

    return (
        <h3
            title={ `Edit title: ${ currentTitle }` }
            className="todo-item__title"
            contentEditable = { editStatus }
            onClick={ () => setEditStatus(true) }
        >{ currentTitle }
        </h3>
    )
}