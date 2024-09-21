
import { useDeleteAllSubTodos } from '../../../hooks';
import './DeletedTodoButton.css';

export const DeletedTodoButton = () => {
    const { deleteAllSubTodos } = useDeleteAllSubTodos()

    return (
        <button 
        className='deleted-todo__button'
        onClick={ deleteAllSubTodos }
        >Delete</button>
    )
}