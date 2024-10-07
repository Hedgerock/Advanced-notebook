import { ButtonIcon } from "../../ButtonIcon";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";
import { useInitChangeNotation } from "../hooks";

import './NotationElement.css';

export const NotationElement = ({ value, valueIndex }) => {
    const { initChangeNotation, actualPlaceholder, deleteNotation } = useInitChangeNotation({ value, valueIndex })
    const { buttonIcons } = useTodoFormItemContext();
    const { delete: currentValue } = buttonIcons;

            
    return (
        <div className="notation-element">
            <input
                className='todo-form__input todo-form__input_notation'
                placeholder={ actualPlaceholder }
                value = { value.text }
                onChange={ initChangeNotation }
            />

            { valueIndex !== 0 && 
                <button
                    className="notation-element__button"
                    onClick={ deleteNotation }
                >
                    <ButtonIcon value = { currentValue } />
                </button>
            }
        </div>
    )
}