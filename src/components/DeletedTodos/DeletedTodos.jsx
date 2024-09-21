import './DeletedTodos.css';

export const DeletedTodos = ({ children }) => {

    return (
        <div className="deleted-todos">
            { children }
        </div>
    )
}