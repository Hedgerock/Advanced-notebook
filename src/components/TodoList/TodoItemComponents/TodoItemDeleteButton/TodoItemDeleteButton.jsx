
import { useTodoItemContext } from '../../../hooks';
import { deletedStatusHandler } from '../../../utils';
import './TodoItemDeleteButton.css';


export const TodoItemDeleteButton = () => {
    const { setTodo, data } = useTodoItemContext();
    const { id, title } = data;

    return (
        <button
            className='todo-item__del-btn'
            onClick={ () => setTodo(prev => deletedStatusHandler({ data: prev, id, isDeleted: true })) }
            title = { `Delete: ${ title }` }
            >
            <i className="fa-solid fa-trash"></i>
        </button>
    )
}