import { useTodoItemChildContext } from "../../hooks";
import { getUpdatedCheckboxChild } from "../../utils";

export const TodoChildInput = () => {
    const {
        todo,
        setTodo,
        id,
        subtodoId,
        status
    } = useTodoItemChildContext();

    return (
        <>
            <input
                className="todo-item__checkbox"
                type="checkbox" 
                checked={ status }
                onChange={() => {
                    setTodo(getUpdatedCheckboxChild({ data: todo, id, subtodoId, boolean: status }));
                }}
            />
        </>
    );
};
