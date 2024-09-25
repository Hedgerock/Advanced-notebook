import { useTodoFormContext } from "../../hooks";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";
import { useCustomTodoData } from "./useCustomTodoData";

export const useChangeInputValue = () => {
    const { setValue, enterEvent, setContentInputData, contentInputData } = useTodoFormContext();
    const { initCreatingTodoProcess } = useCustomTodoData();
    const { data } = useTodoFormItemContext();
    const { id, content: inputValue } =  data

    const initChangeValue = ({ e }) => {
        setContentInputData(prev => {
            const updatedArr = prev.map(item => item.id === id 
                ? {...item, content: e.target.value} 
                : {...item}
            )

            setValue(prev => {
                return {...prev, content: updatedArr}
            })

            return updatedArr
        })
    }

    const createEvent = ({ event }) => {
        enterEvent(event, contentInputData, initCreatingTodoProcess)
    }

    return { initChangeValue, createEvent, inputValue }
}