import { useTodoFormContext } from "../../hooks"
import { useCustomTodoData } from "../hooks";

export const TodoFormInputTitle = () => {
    const { title, setValue, enterEvent, contentInputData } = useTodoFormContext();
    const { initCreatingTodoProcess } = useCustomTodoData();

    return (
        <input 
            className='todo-form__input todo-form__input_title'
            type="text" 
            placeholder= 'Type here'
            value={ title }
            onChange={ e => {

                setValue(prev => {
                return {...prev, title: e.target.value}
                })
            }
            }

            onKeyDown={ (event) => enterEvent(event, contentInputData, initCreatingTodoProcess) }
        />
    )
}