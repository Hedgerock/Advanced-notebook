import { ButtonIcon } from "../../ButtonIcon";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext"

import './TodoFormItemButton.css';

export const TodoFormItemButton = () => {
    const { setContentInputData, data, buttonIcons } = useTodoFormItemContext();
    const { id } = data;
    const { delete: currentValue } = buttonIcons;

    return (
        <button
            onClick={ () => {
                setContentInputData(prev => {
                    return prev.filter(val => val.id !== id)
                })
            } }
            className='todo-form-item__button'
        >
            <ButtonIcon value = { currentValue }/>
        </button>
    )
}