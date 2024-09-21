import { useTodoItemChildContext } from "../../../hooks";
import { getUpdatedCheckboxChild } from "../../../utils";
import './TodoChildInput.css';

export const TodoChildInput = () => {
    const {
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
                    setTodo(prev => getUpdatedCheckboxChild({ data: prev, id, subtodoId, boolean: status }));
                }}
            />
        </>
    );
};
