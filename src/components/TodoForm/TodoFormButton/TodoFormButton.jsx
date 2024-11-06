import { ButtonIcon } from "../../ButtonIcon";
import { useTodoFormContext } from "../../hooks";
import { useCustomTodoData } from "../hooks";

import './TodoFormButton.css';


export const TodoFormButton = () => {
    const { initCreatingTodoProcess, contentTitle, create } = useCustomTodoData();
    const { isDataReady, isNotated, isNotChildElement } = useTodoFormContext();
    const actualClassName = isNotated && isNotChildElement 
    ? 'todo-form__add-btn todo-form__add-btn_form-btn-notated' 
    : 'todo-form__add-btn todo-form__add-btn_form-btn'

    return (
        <button
            title={ contentTitle }
            className={ actualClassName }
            onClick={ initCreatingTodoProcess }
            disabled = { isDataReady }
        > 
            <ButtonIcon value = { create }/>
        </button>
    )
}