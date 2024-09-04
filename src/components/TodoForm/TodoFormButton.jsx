import { useTodoFormContext } from "../hooks";

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