import { useChangeInputValue } from "../hooks";

import './TodoFormInputContent.css';
import { TodoFormInputBoxButtons } from "./TodoFormInputBoxButtons";

export const TodoFormInputContent = () => {
    const { 
        initChangeValue, 
        createEvent, 
        inputValue, 
        actualTitle,
    } = useChangeInputValue();

    return (
        <div className="todo-form-input-box">
            <TodoFormInputBoxButtons>
                <input 
                    className='todo-form__input'
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