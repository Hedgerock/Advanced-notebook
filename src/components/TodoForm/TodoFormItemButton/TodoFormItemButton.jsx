import { ButtonIcon } from "../../ButtonIcon";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext"

import './TodoFormItemButton.css';

export const TodoFormItemButton = () => {
    const { setContentInputData, data, buttonIcons } = useTodoFormItemContext();
    const { id, notation } = data;
    const { delete: currentValue } = buttonIcons;

    const actualClassName = notation?.status 
        ? `todo-form-item__button todo-form-item__button_updated${ data.notation.value.length === 1 ? '-single' : '' }` 
        : 'todo-form-item__button'

    return (
        <button
            onClick={ () => {
                setContentInputData(prev => {
                    return prev.filter(val => val.id !== id)
                })
            } }
            className= { actualClassName }
        >
            <ButtonIcon value = { currentValue }/>
        </button>
    )
}