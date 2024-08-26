import { useTodoItemChildContext } from "../../hooks";

export const TodoChildCurrentNumber = () => {
    const { todoItemChildOrder } = useTodoItemChildContext();

    return (
        <span 
            className="todo-item__text todo-item__text_number"
        >
            { todoItemChildOrder }
        </span>
    )
}