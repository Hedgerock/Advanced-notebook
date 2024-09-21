import './DeletedTodoBox.css';

export const DeletedTodoBox = ({ children }) => {

    return (
        <div className="deleted-todo-box">
           { children }
        </div>
    )
}