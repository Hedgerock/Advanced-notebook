
import { ButtonIcon } from '../../../../ButtonIcon';
import { useTodoContext } from '../../../../hooks';
import { useDeleteAllSubTodos } from '../../../hooks';
import './DeletedTodoButton.css';

export const DeletedTodoButton = () => {
    const { deleteAllSubTodos } = useDeleteAllSubTodos()
    const { buttonIcons } = useTodoContext();
    const { delete: currentValue } = buttonIcons

    return (
        <button 
        className='deleted-todo__button'
        onClick={ deleteAllSubTodos }
        >
            <ButtonIcon value={ currentValue }/>
        </button>
    )
}