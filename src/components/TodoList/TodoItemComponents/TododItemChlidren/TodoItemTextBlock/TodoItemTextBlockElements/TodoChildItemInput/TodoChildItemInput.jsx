import { useTodoItemChildContext } from "../../../hooks";
import './TodoChildItemInput.css';

export const TodoChildItemInput = () => {
    const { subTodoValue, setSubTodoValue } = useTodoItemChildContext();

    return (
        <input
            className='todo-item__text todo-item__text_input'
            type="text" 
            value={ subTodoValue } 
            onChange={ e => setSubTodoValue(e.target.value) }
        />
    )
}