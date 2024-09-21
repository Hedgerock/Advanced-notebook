

import { useDeletedTodosContext } from '../../../../hooks';
import { deletedStatusHandler } from '../../../../utils';
import './DeletedTodoTitle.css';

export const DeletedTodoTitle = () => {
    const { data: item, setTodo } = useDeletedTodosContext();

    return (
        <h2
            className='deleted-todo__title'
            onClick={ () => {
            setTodo(prev => deletedStatusHandler({ data: prev, id: item.id, deleted: false }))
            } }
        >{ item.title }
        </h2>
    )
}