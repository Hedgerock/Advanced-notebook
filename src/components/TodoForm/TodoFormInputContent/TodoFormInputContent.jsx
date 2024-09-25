import { useChangeInputValue } from "../hooks";

import './TodoFormInputContent.css';

export const TodoFormInputContent = () => {
    const { initChangeValue, createEvent, inputValue } = useChangeInputValue();

    return (
        <input 
            className='todo-form__input'
            type="text" 
            placeholder= 'Type here'
            value={ inputValue }
            onChange={ e => initChangeValue({ e }) }
            onKeyDown={ (event) => createEvent({ event }) }
        />
    )
}