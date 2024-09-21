import { useTodoFormContext } from "../../hooks";

import './TodoFormInput.css';

export const TodoFormInput = ({ inputKey, inputValue }) => {
    const { value, setValue, enterEvent, content, initNewTodo } = useTodoFormContext();
    
    const currentPlaceholder = inputKey === 'title' ? 'Title' : 'Type here'

    return (
        <input 
            className='todo-form__input'
            type="text" 
            placeholder= { currentPlaceholder }
            value={ inputValue }
            onChange={ e => setValue({ ...value, [inputKey]: e.target.value }) }
            onKeyDown={ (event) => enterEvent(event, content, initNewTodo) }
        />
    )
}