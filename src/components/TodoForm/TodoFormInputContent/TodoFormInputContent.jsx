import { useChangeInputValue } from "../hooks";

import './TodoFormInputContent.css';
import { TodoFormInputBoxButtons } from "./TodoFormInputBoxButtons";
import { useGetParentAndChildClassName } from "./hooks";

export const TodoFormInputContent = () => {
    const { 
        initChangeValue, 
        createEvent, 
        inputValue, 
        actualTitle,
    } = useChangeInputValue();

    const { parentClassName, childClassName } = useGetParentAndChildClassName();

    return (
        <div className={ parentClassName }>
            <TodoFormInputBoxButtons>
                <input 
                    className={ childClassName }
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