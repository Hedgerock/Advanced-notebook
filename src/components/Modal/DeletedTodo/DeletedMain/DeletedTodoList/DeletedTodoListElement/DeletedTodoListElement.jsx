import './DeletedTodoListElement.css';
import { DeletedTodoOptions } from '../../../../../DeletedTodosOptions';
import { useDeletedTodoListItemContext } from '../../../../../hooks/useDeletedTodoListItemContext';

export const DeletedTodoLIstElement = () => {
    const { data: el } = useDeletedTodoListItemContext();
    
    return (
        <li
            className="deleted-todo-list__element"
        >   <div className="deleted-todo-list-content">
                <span 
                    className='deleted-todo-list-content__value'
                >
                    { el.text }
                </span>
                <DeletedTodoOptions type = { 'currentChild' }/>
            </div>
        </li>
    )
}