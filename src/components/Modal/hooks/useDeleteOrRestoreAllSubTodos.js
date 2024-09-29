import { useDeletedTodosContext } from "../../hooks";
import { deletedStatusHandler } from "../../utils";

export const useDeleteOrRestoreAllSubTodos = () => {
    const { setTodo, data: item } = useDeletedTodosContext();

    const deleteAllSubTodos = () => {

        setTodo(prev => prev
            .map(el => (
                el.id === item.id
                ? { ...el, text: el.text.filter(value => !value.deleted )}
                : { ...el }
            ))
            .filter(val => val.text.length)) 
    }

    const initRestore = () => {
        setTodo(prev => deletedStatusHandler({ data: prev, id: item.id, deleted: false }))
    }

    return { deleteAllSubTodos, initRestore }
}