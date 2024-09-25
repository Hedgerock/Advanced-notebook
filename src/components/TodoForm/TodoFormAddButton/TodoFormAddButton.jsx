import { ButtonIcon } from "../../ButtonIcon";
import { useCreateNewInput } from "../hooks";

import './TodoFormAddButton.css';

export const TodoFormAddButton = () => {
    const { create, createNewInput } = useCreateNewInput();

    return (
        <button
            onClick={ createNewInput }
            className='todo-form__add-btn'
        >
            <ButtonIcon value = { create }/>
        </button>
    )
}