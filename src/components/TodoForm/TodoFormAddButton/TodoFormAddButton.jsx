import { ButtonIcon } from "../../ButtonIcon";
import { useTodoContext } from "../../hooks";
import { useCreateNewInput } from "../hooks";

import './TodoFormAddButton.css';

export const TodoFormAddButton = () => {
    const { create, createNewInput } = useCreateNewInput();
    const { contentInputData } = useTodoContext();
    const actualClassName = contentInputData.some(el => el.notation?.status) 
    ? 'todo-form__add-btn todo-form__add-btn_alternate' 
    : 'todo-form__add-btn';

    return (
        <button
            title = 'Create extra subtodo'
            onClick={ createNewInput }
            className={ actualClassName }
        >
            <ButtonIcon value = { create }/>
        </button>
    )
}