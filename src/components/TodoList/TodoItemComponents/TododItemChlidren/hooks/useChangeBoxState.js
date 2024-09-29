import { checkAllstatuses, getFilteredData, getUpdatedTodo } from "../../utils";
import { useTodoItemChildContext } from "./useTodoItemChildContext";


export const useChangeBoxState = () => {
    const {
        setTodo,
        id,
        changeStatus,
        setChangeStatus,
        subtodoId,
        subtodoText,
        buttonIcons,
        subTodoValue
    } = useTodoItemChildContext();

    const { confirm, edit, decline: currentButtonValue } = buttonIcons

    const buttonValue = changeStatus 
        ? confirm 
        : edit

    const currentTitle = changeStatus 
        ? `Confirm: ${ subtodoText }` 
        : `Edit: ${ subtodoText }`

    const initChangeValue = () => {
        setChangeStatus(prev => !prev)

        setTodo(prev => {
            const newArr = prev.map(item => {
                return item.id === id
                    ? {...item, text: item.text.map(el => {
                        return el.id === subtodoId ? {...el, text: subTodoValue} : {...el}
                    })}
                    : {...item}
            })

            const text = newArr.find(el => el.id === id).text

            if (!subTodoValue) {
                const updatedText = getFilteredData({ data: text, id: subtodoId })
                const boolean = checkAllstatuses({ data: updatedText, key: 'status' })
                
                return updatedText.length
                    ? getUpdatedTodo({ data: newArr, id, newData: updatedText, boolean })
                    : getFilteredData({ data: newArr, id })
            }

            return newArr
        })
    }

    return { initChangeValue, currentTitle, buttonValue, currentButtonValue }
}