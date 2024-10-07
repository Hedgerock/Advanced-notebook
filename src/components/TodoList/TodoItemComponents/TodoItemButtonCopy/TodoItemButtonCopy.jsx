import { ButtonIcon } from '../../../ButtonIcon';
import { useTodoItemContext } from '../../../hooks';
import { useInitCopyTodo } from '../hooks';
import './TodoItemButtonCopy.css';

export const TodoItemButtonCopy = () => {
    const { copy, initCopyTodo } = useInitCopyTodo();
    const { title } = useTodoItemContext();

    return (
        <button
            title={ `Copy ${ title } subtodos` }
            className='todo-item__button todo-item__button_copy'
            onClick={ initCopyTodo }
        >
            <ButtonIcon value = { copy } />
        </button>
    )
}