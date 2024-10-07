import { ButtonIcon } from "../../ButtonIcon";
import { useTodoFormContext } from "../../hooks";
import { useCustomTodoData } from "../hooks";

import './TodoFormButton.css';


export const TodoFormButton = () => {
    const { initCreatingTodoProcess, contentTitle, create } = useCustomTodoData();
    const { isDataReady } = useTodoFormContext();

    return (
        <button
            title={ contentTitle }
            className='todo-form__add-btn'
            onClick={ initCreatingTodoProcess }
            disabled = { isDataReady }
        > 
            <ButtonIcon value = { create }/>
        </button>
    )
}