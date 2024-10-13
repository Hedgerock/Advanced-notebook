import { useTodoItemContext } from "../../../hooks";

export const useInitNewSubTodo = () => {
    const { 
        initNewSubTodo,
        setCreateSubTodoModal
    } = useTodoItemContext();



    const createSubTodo = () => {

        initNewSubTodo()
        setCreateSubTodoModal(false);

    }

    return { createSubTodo }
}