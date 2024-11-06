import { useChangeInputValue } from "../hooks";

import './TodoFormInputContent.css';
import { TodoFormInputBoxButtons } from "./TodoFormInputBoxButtons";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";

export const TodoFormInputContent = () => {
    const { 
        initChangeValue, 
        createEvent, 
        inputValue, 
        actualTitle,
    } = useChangeInputValue();

    const { data, index, mainData } = useTodoFormItemContext();
    const isValueOpened = data.notation.status ? data.notation.value.every(el => el.text.length > 0) : true;

    const isElementReady = isValueOpened && data.content.length > 0;
    const isCountedAndLastElement = data.count.status && mainData.length - 1 === index;

    return (
        <div className={`todo-form-input-box ${ isCountedAndLastElement ? 'todo-form-input-box_last-element' : '' }`}>
            <TodoFormInputBoxButtons>
                <input 
                    className={ `todo-form__input ${ isElementReady ? '' : 'todo-form__input_empty' }` }
                    type="text" 
                    placeholder= { actualTitle }
                    value={ inputValue }
                    onChange={ e => initChangeValue({ e }) }
                    onKeyDown={ (event) => createEvent({ event }) }
                />
            </TodoFormInputBoxButtons>
        </div>
    )
}