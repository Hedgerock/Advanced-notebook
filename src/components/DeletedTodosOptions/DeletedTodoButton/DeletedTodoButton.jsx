
import { ButtonIcon } from '../../ButtonIcon';
import { useDeletedTodoOptionsContext, useDeletedTodosContext, useTodoContext } from '../../hooks';
import { useDeletedTodoListItemContext } from '../../hooks/useDeletedTodoListItemContext';
import './DeletedTodoButton.css';

export const DeletedTodoButton = () => {
    const { buttonIcons } = useTodoContext()
    const { delFunc, deleteTitle } = useDeletedTodoOptionsContext();
    const { delete: currentValue } = buttonIcons

    const { data } = useDeletedTodosContext();
    const { data: item } = useDeletedTodoListItemContext();

    const actualTitle = `${deleteTitle} ${ data?.title ? data.title : '' } ${ item?.text ? `as ${ item.text }` : '' }`

    return (
        <button
            title={ actualTitle }
            className='deleted-todo__button'
            onClick={ delFunc }
        >
            <ButtonIcon value={ currentValue }/>
        </button>
    )
}