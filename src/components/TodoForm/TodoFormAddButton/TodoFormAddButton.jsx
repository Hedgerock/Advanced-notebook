import { ButtonIcon } from "../../ButtonIcon";
import { useCreateNewInput } from "../hooks";

import './TodoFormAddButton.css';

export const TodoFormAddButton = () => {
    const { create, createNewInput } = useCreateNewInput();

    return (
        <button
            title = 'Create extra subtodo'
            onClick={ createNewInput }
            className='todo-form__add-btn'
        >
            <ButtonIcon value = { create }/>
        </button>
    )
}