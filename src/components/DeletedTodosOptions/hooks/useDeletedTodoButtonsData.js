

import { useTerminateOrRestoreAllDeletedTodos } from "../../hooks/useTerminateOrRestoreAllDeletedTodos";
import { useDeleteOrRestoreListElement } from "../../Modal/DeletedTodo/DeletedMain/DeletedTodoList/hooks";
import { useDeleteOrRestoreAllSubTodos } from "../../Modal/hooks";


export const useDeletedTodoButtonsData = () => {
    const { deleteAllSubTodos, initRestore } = useDeleteOrRestoreAllSubTodos();
    const { terminateAllDeletedTodos, restoreAllDeletedTodos } = useTerminateOrRestoreAllDeletedTodos();
    const { restoreElementList, deleteElementList } = useDeleteOrRestoreListElement();

    const deletedTodoButtonsData = {
        all: { 
            className: 'main', 
            delFunc: terminateAllDeletedTodos,
            restoreFunc: restoreAllDeletedTodos, 
            restoreTitle: 'Restore all deleted todos',
            deleteTitle: 'Terminate all deleted todos' 
        },
        currentAll: { 
            className: 'current-all', 
            delFunc: deleteAllSubTodos,
            restoreFunc: initRestore,
            restoreTitle: 'Restore all deleted subtodos from',
            deleteTitle: 'Terminate all deleted todos from' 
        },
        currentChild: { 
            className: 'current-child', 
            delFunc: deleteElementList,
            restoreFunc: restoreElementList, 
            restoreTitle: 'Restore deleted subtodo from',
            deleteTitle: 'Terminate deleted subtodo from' 
        }
    }

    return { deletedTodoButtonsData }
}