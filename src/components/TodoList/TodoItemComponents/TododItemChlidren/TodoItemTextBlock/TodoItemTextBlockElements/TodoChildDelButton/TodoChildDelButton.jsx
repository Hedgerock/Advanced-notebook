import { ButtonIcon } from '../../../../../../ButtonIcon';
import { useRemoveTodo, useTodoItemChildContext } from '../../../hooks';
import './TodoChildDelButton.css';

export const TodoChildDelButton = () => {
    const { subtodoText, buttonIcons, isChangable } = useTodoItemChildContext();
    const { delete: currentValue } = buttonIcons
    const { initRemove } = useRemoveTodo();

    return (
        <button
            disabled = { !isChangable }
            className='todo-item-child__del-btn'
            title = { isChangable ? `Delete: ${ subtodoText }` : "Delete option is not available" }
            onClick={ () => {
                if (!isChangable) return;
                initRemove();
            } }
        >
            <ButtonIcon value = { currentValue }/>
        </button>
    )
}