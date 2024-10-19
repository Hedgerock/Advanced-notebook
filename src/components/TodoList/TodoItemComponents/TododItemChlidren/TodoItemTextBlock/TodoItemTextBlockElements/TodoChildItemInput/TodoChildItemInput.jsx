import { useTodoItemChildContext } from "../../../hooks";
import './TodoChildItemInput.css';

export const TodoChildItemInput = () => {
    const { subTodoValue, setSubTodoValue } = useTodoItemChildContext();
    const actualClassName = `todo-item__text todo-item__text_input`

    return (
        <input
            className= { actualClassName }
            type="text" 
            value={ subTodoValue } 
            onChange={ e => setSubTodoValue(e.target.value) }
        />
    )
}