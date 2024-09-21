import { useTodoFormContext } from "../../hooks";

import './TodoFormButton.css';


export const TodoFormButton = () => {
    const { initNewTodo, content } = useTodoFormContext();

    return (
        <button
            className='todo-form__add-btn'
            onClick={ initNewTodo }
            disabled = { !content }
        >Send
        </button>
    )
}