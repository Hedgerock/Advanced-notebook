import { useEffect } from "react";
import { useTodoContext, useTodoFormContext } from "../../hooks"
import { useCustomTodoData } from "../hooks";

export const TodoFormInputTitle = () => {
    const { title, setValue, enterEvent, mainData, isNotChildElement, mainId, altTitle } = useTodoFormContext();
    const { setContentInputData } = useTodoContext();
    const { initCreatingTodoProcess } = useCustomTodoData();


    useEffect(() => {
        if (!isNotChildElement) {
            setContentInputData(prev => {
                return prev.map(el => {
                    return el.id === mainId
                        ? {...el, title: title || altTitle}
                        : el
                })
            })
        }
    }, [isNotChildElement, mainId, setContentInputData, title, altTitle])

    return (
        <input 
            className='todo-form__input todo-form__input_title'
            type="text" 
            placeholder= 'Type your todo title'
            value={ title }
            onChange={ e => {

                setValue(prev => {
                    return {...prev, title: e.target.value}
                })
            }
            }

            onKeyDown={ (event) => enterEvent(event, mainData, initCreatingTodoProcess) }
        />
    )
}