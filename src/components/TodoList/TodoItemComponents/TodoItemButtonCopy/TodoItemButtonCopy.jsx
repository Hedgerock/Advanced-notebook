import { ButtonIcon } from '../../../ButtonIcon';
import { useTodoItemContext } from '../../../hooks';
import { useInitCopyTodo } from '../hooks';
import './TodoItemButtonCopy.css';

export const TodoItemButtonCopy = () => {
    const { copy, initCopyTodo } = useInitCopyTodo();
    const { title, isChangable } = useTodoItemContext();

    return (
        <button
            disabled = { !isChangable }
            title={ isChangable ? `Copy ${ title } subtodos` : 'Copy option is not available' }
            className='todo-item__button todo-item__button_copy'
            onClick={ () => {
                if (!isChangable) return;
                initCopyTodo()
            } }
        >
            <ButtonIcon value = { copy } />
        </button>
    )
}