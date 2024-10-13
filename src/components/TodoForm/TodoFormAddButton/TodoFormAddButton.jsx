import { ButtonIcon } from "../../ButtonIcon";
import { useCreateNewInput } from "../hooks";

import './TodoFormAddButton.css';

export const TodoFormAddButton = () => {
    const { create, createNewInput, actualClassName } = useCreateNewInput();

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