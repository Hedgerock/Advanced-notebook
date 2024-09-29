

import { useDeletedTodosContext } from '../../../../hooks';
import './DeletedTodoTitle.css';

export const DeletedTodoTitle = () => {
    const { data: item } = useDeletedTodosContext();

    return (
        <h2
            className='deleted-todo__title'
        >{ item.title }
        </h2>
    )
}