import './TodoList.css';

export const TodoList = ({ children }) => {

    return (
        <div className="todo-list">
            { children }
        </div>
    )
}