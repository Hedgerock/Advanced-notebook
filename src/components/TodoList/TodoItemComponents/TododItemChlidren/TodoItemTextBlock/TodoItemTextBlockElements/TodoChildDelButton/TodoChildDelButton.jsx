import { ButtonIcon } from '../../../../../../ButtonIcon';
import { useRemoveTodo, useTodoItemChildContext } from '../../../hooks';
import './TodoChildDelButton.css';

export const TodoChildDelButton = () => {
    const { subtodoText, buttonIcons } = useTodoItemChildContext();
    const { delete: currentValue } = buttonIcons
    const { initRemove } = useRemoveTodo();

    return (
        <button
            className='todo-item-child__del-btn'
            title = { `Delete: ${ subtodoText }` }
            onClick={ initRemove }
        >
            <ButtonIcon value = { currentValue }/>
        </button>
    )
}