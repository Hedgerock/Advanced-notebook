import './DeletedTodoListElement.css';

export const DeletedTodoLIstElement = ({ data: el }) => {

    return (
        <li
            className="deleted-todo-list__element"
        >{ el.text }
        </li>
    )
}