import { ButtonIcon } from "../../ButtonIcon";
import { useCustomTodoData } from "../hooks";
import { checkAllContentValue } from "../utils";

import './TodoFormButton.css';


export const TodoFormButton = () => {
    const { initCreatingTodoProcess, contentTitle, contentInputData, create } = useCustomTodoData();

    return (
        <button
            title={ contentTitle }
            className='todo-form__add-btn'
            onClick={ initCreatingTodoProcess }
            disabled = { checkAllContentValue({ data: contentInputData, key: 'content' }) }
        > 
            <ButtonIcon value = { create }/>
        </button>
    )
}