
import { useTodoItemContext } from '../../../hooks';
import { getFilteredData } from '../utils';
import './TodoItemDeleteButton.css';


export const TodoItemDeleteButton = () => {
    const { todo, setTodo, data } = useTodoItemContext();
    const { id, title } = data;

    return (
        <button
            className='todo-item__del-btn'
            onClick={ () => setTodo(getFilteredData({ data: todo, id })) }
            title = { `Delete: ${ title }` }
            >
            <i className="fa-solid fa-trash"></i>
        </button>
    )
}