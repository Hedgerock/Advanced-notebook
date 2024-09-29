import { ButtonIcon } from '../../ButtonIcon';
import { useDeletedTodoOptionsContext, useDeletedTodosContext, useTodoContext } from '../../hooks';
import { useDeletedTodoListItemContext } from '../../hooks/useDeletedTodoListItemContext';
import './RestoreTodoButton.css';

export const RestoreTodoButton = () => {
    const { buttonIcons } = useTodoContext();
    const { restoreFunc, restoreTitle } = useDeletedTodoOptionsContext();
    const { backwards } = buttonIcons

    const { data } = useDeletedTodosContext();
    const { data: item } = useDeletedTodoListItemContext();

    const actualTitle = `${restoreTitle} ${ data?.title ? data.title : '' } ${ item?.text ? `as ${ item.text }` : '' }`

    return (
        <button
            className={`deleted-todo__button`}
            title = { actualTitle }
            onClick={ restoreFunc }>
            <ButtonIcon value = { backwards } />
        </button>
    )
}