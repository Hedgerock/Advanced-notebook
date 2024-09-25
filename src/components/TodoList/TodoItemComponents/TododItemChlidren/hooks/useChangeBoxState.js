import { checkAllstatuses, getFilteredData, getUpdatedTodo } from "../../utils";
import { useTodoItemChildContext } from "./useTodoItemChildContext";


export const useChangeBoxState = () => {
    const {
        setTodo,
        text,
        id,
        changeStatus,
        setChangeStatus,
        subtodoId,
        subtodoText,
        buttonIcons
    } = useTodoItemChildContext();

    const { confirm, edit } = buttonIcons

    const buttonValue = changeStatus 
        ? confirm 
        : edit

    const currentTitle = changeStatus 
        ? `Confirm: ${ subtodoText }` 
        : `Edit: ${ subtodoText }`

    const initChangeValue = () => {
        setChangeStatus(prev => !prev)
        if (!subtodoText) {
            const updatedText = getFilteredData({ data: text, id: subtodoId })
            const boolean = checkAllstatuses({ data: updatedText, key: 'status' })
            setTodo(prev => updatedText.length
                ? getUpdatedTodo({ data: prev, id, newData: updatedText, boolean })
                : getFilteredData({ data: prev, id })
            )
        }
    }

    return { initChangeValue, currentTitle, buttonValue }
}