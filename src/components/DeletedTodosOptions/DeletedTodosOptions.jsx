import { DeletedTodoButton } from "./DeletedTodoButton"
import { RestoreTodoButton } from "./RestoreTodoButton"
import DeleteTodoOptionsProvider from '../../context/deletedTodoOptionsContext';
import { useDeletedTodoButtonsData } from "./hooks";

export const DeletedTodoOptions = ({ type }) => {
    const { deletedTodoButtonsData } = useDeletedTodoButtonsData();
    const { className, delFunc, restoreFunc, restoreTitle, deleteTitle  } = deletedTodoButtonsData[type]

    return (
        <DeleteTodoOptionsProvider value = {{ className, delFunc, restoreFunc, restoreTitle, deleteTitle }}>
            <div className={`deleted-todo-options ${ className ? `deleted-todo-options_${className}` : ''}`}>
                <RestoreTodoButton />
                <DeletedTodoButton />
            </div>
        </DeleteTodoOptionsProvider>
    )
}