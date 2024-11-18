import { ButtonIcon } from '../../../ButtonIcon';
import { useTodoItemContext } from '../../../hooks';
import { deletedStatusHandler } from '../../../utils';
import './TodoItemDeleteButton.css';


export const TodoItemDeleteButton = () => {
    const { setTodo, data, buttonIcons, isChangable } = useTodoItemContext();
    const { delete: currentValue } = buttonIcons
    const { id, title } = data;

    return (
        <button
            className='todo-item__del-btn'
            disabled = { !isChangable }
            onClick={ () => {
                if (!isChangable) return;
                setTodo(prev => deletedStatusHandler({ data: prev, id, deleted: true }))
            } }
            title = { isChangable ? `Delete: ${ title }` : 'Delete option is not available' }
            >
            <ButtonIcon value = { currentValue }/>
        </button>
    )
}