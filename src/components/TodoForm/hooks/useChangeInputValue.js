import { useTodoFormContext } from "../../hooks";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";
import { useCustomTodoData } from "./useCustomTodoData";

export const useChangeInputValue = () => {
    const { setValue, enterEvent, setContentInputData, contentInputData, isDataReady } = useTodoFormContext();
    const { initCreatingTodoProcess } = useCustomTodoData();
    const { data, index } = useTodoFormItemContext();
    const { id, content: inputValue, notation } =  data

    const prevIndex = index - 1;
    const nextIndex = index + 1;

    const prevVal = contentInputData[prevIndex];
    const nextVal = contentInputData[nextIndex];

    const actualTitle = `Type here your subtodo ${ contentInputData.length > 1 ? `№${ nextIndex }` : '' }`

    const initChangeValue = ({ e }) => {
        setContentInputData(prev => {
            const updatedArr = prev.map(item => item.id === id 
                ? {...item, content: e.target.value} 
                : {...item}
            )

            return updatedArr
        })

        setValue(prev => {
            return {...prev, content: prev.content.map(item => {
                return item.id === id
                    ? {...item, content: e.target.value} 
                    : {...item}
            })}
        })
    }

    const initPrevVal = () => {
        setContentInputData(prev => {
            return prev.map((item, ind) => {
                if (item.id === prevVal?.id) {
                    return {...item, content: inputValue, notation};
                }

                if (item.id === data.id) {
                    return {...item, content: prevVal.content, notation: prevVal.notation}
                }
                
                return {...item};
            })
        })
    }

    const initNextVal = () => {
        setContentInputData(prev => {
            return prev.map((item, ind) => {

                if (item.id === data.id) {
                    return {...item, content: nextVal.content, notation: nextVal.notation}
                }

                if (item.id === nextVal?.id) {
                    return {...item, content: inputValue, notation};
                }
                
                return {...item};
            })
        })
    }

    const notationHandler = () => {
        setContentInputData(prev => {
            return prev.map(item => {
                return item.id === data.id
                    ? {...item, notation: {
                        ...item.notation, 
                        status: !item.notation.status
                    }}
                    : item
            })
        })
    }

    const initDeleteOption = () => {
        setContentInputData(prev => {
            return prev.filter(val => val.id !== id)
        })
    }

    const createEvent = ({ event }) => {
        if (isDataReady) {
            return
        }
        enterEvent(event, contentInputData, initCreatingTodoProcess)
    }

    return { 
        initChangeValue, 
        createEvent, 
        inputValue, 
        actualTitle, 
        contentInputData, 
        initPrevVal, 
        initNextVal, 
        index, 
        notationHandler, 
        initDeleteOption 
    }
}