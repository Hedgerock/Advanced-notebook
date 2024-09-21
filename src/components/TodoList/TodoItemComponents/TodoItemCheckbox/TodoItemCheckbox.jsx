
import { useTodoItemContext } from '../../../hooks';
import { getUpdatedTextStatus } from '../utils';
import './TodoItemCheckbox.css';

export const TodoItemCheckbox = () => {
    const { 
        setTodo, 
        data
    } = useTodoItemContext();

    const { id, text, isDone } = data

    return (
        <input
            className='todo-item__input'
            type="checkbox"
            onChange={ () => {
                setTodo(prev => getUpdatedTextStatus({ todo: prev, id, text, isDone }))
            }}
            checked = { isDone }
        />
    )
}