
import { useTodoItemContext } from '../../../hooks';
import { getUpdatedTextStatus } from '../utils';
import './TodoItemCheckbox.css';

export const TodoItemCheckbox = () => {
    const {  
        todo, 
        setTodo, 
        data
    } = useTodoItemContext();

    const { id, text, isDone } = data

    return (
        <input
            className='todo-item__input'
            type="checkbox"
            onChange={ () => {
                setTodo(getUpdatedTextStatus({ todo, id, text, isDone }))
            }}
            checked = { isDone }
        />
    )
}