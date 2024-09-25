
import { ButtonIcon } from '../../../ButtonIcon';
import { useTodoItemContext } from '../../../hooks';
import { deletedStatusHandler } from '../../../utils';
import './TodoItemDeleteButton.css';


export const TodoItemDeleteButton = () => {
    const { setTodo, data, buttonIcons } = useTodoItemContext();
    const { delete: currentValue } = buttonIcons
    const { id, title } = data;

    return (
        <button
            className='todo-item__del-btn'
            onClick={ () => setTodo(prev => deletedStatusHandler({ data: prev, id, isDeleted: true })) }
            title = { `Delete: ${ title }` }
            >
            <ButtonIcon value = { currentValue }/>
        </button>
    )
}