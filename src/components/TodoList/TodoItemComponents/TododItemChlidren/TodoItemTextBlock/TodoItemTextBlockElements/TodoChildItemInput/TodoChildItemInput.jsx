import { useTodoItemChildContext } from "../../../hooks";
import { getTodoChildUpdatedText } from "../../../utils";
import './TodoChildItemInput.css';

export const TodoChildItemInput = () => {
    const {
        setTodo,
        id,
        subtodoText,
        subtodoId,
    } = useTodoItemChildContext();

    return (
        <input
            className='todo-item__text todo-item__text_input'
            type="text" 
            value={ subtodoText } 
            onChange={ e => setTodo(prev => getTodoChildUpdatedText({ data:prev, id, subtodoId, e }))}
        />
    )
}