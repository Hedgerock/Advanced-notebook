import { useDeletedTodosContext } from "../../hooks";

export const useDeleteAllSubTodos = () => {
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

    return { deleteAllSubTodos }
}