import { useTodoItemContext } from "../../../hooks";

export const useInitNewSubTodo = () => {
    const { 
        curEl,
        currentValId,
        setSubValue,
        initNewSubTodo,
        data
    } = useTodoItemContext();

    const { text } = data


    const createSubTodo = () => {

        initNewSubTodo({ id: currentValId, curEl, text })
        setSubValue('');

    }

    return { createSubTodo }
}