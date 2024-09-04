import { getAdjacentElement, getSwapValue } from "../utils";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useGetSwapped = () => {
    const { todo, id: todoId, subtodoId, setTodo, childrenFullList } = useTodoItemChildContext();

    const currentElChild = childrenFullList.find(el => el.id === subtodoId);
    const currentIndex = childrenFullList.indexOf(currentElChild);

    const prevEl = getAdjacentElement(
        { 
            type: 'previous', 
            index: currentIndex, 
            data: childrenFullList 
        }
    )

    const nextEl = getAdjacentElement(
        { 
            type: 'next', 
            index: currentIndex, 
            data: childrenFullList 
        }
    )

    const prevId = prevEl ? prevEl.id : null
    const nextId = nextEl ? nextEl.id : null

    const initMoveUp = () => {
        setTodo(
            getSwapValue(
                {
                    data: todo,
                    key: 'text', 
                    currentValue: currentElChild, 
                    newValue: prevEl, 
                    todoId, 
                    subtodoId, 
                    adjacentId: prevId
                }
            )
        )
    }

    const initMoveDown = () => {
        setTodo(
            getSwapValue(
                {
                    data: todo,
                    key: 'text', 
                    currentValue: currentElChild, 
                    newValue: nextEl, 
                    todoId, 
                    subtodoId, 
                    adjacentId: nextId
                }
            )
        )
    }

    return { initMoveUp, initMoveDown }
}