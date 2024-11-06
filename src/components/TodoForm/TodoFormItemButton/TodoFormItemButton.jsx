import { ButtonIcon } from "../../ButtonIcon";
import { useGetTodoFormItemButtonData } from "../hooks";

import './TodoFormItemButton.css';

export const TodoFormItemButton = () => {
    const { actualClassName, currentValue, deleteSubTodo } = useGetTodoFormItemButtonData();

    return (
        <button
            onClick={ deleteSubTodo }
            className= { actualClassName }
        >
            <ButtonIcon value = { currentValue }/>
        </button>
    )
}