import { useRemoveTodo, useTodoItemChildContext } from '../../../hooks';
import './TodoChildDelButton.css';

export const TodoChildDelButton = () => {
    const { subtodoText } = useTodoItemChildContext();
    const { initRemove } = useRemoveTodo();

    return (
        <button
            className='todo-item-child__del-btn'
            title = { `Delete: ${ subtodoText }` }
            onClick={ initRemove }
        >
            <i className="fa-solid fa-trash"></i>
        </button>
    )
}