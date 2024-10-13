import { useTodoFormContext } from "../../hooks";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";
import { useCustomTodoData } from "./useCustomTodoData";

export const useChangeInputValue = () => {
    const { setValue, enterEvent, isDataReady } = useTodoFormContext();
    const { initCreatingTodoProcess } = useCustomTodoData();
    const { data, index, mainData, setMainData } = useTodoFormItemContext();
    const { id, content: inputValue, notation } =  data

    const prevIndex = index - 1;
    const nextIndex = index + 1;

    const prevVal = mainData[prevIndex];
    const nextVal = mainData[nextIndex];

    const actualTitle = `Type here your subtodo ${ mainData.length > 1 ? `№${ nextIndex }` : '' }`

    const initChangeValue = ({ e }) => {
        setMainData(prev => {
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
        setMainData(prev => {
            return prev.map((item, ind) => {
                if (item.id === prevVal?.id) {
                    return {...item, content: inputValue, notation };
                }

                if (item.id === data.id) {
                    return {...item, content: prevVal.content, notation: prevVal.notation }
                }
                
                return {...item};
            })
        })
    }

    const initNextVal = () => {
        setMainData(prev => {
            return prev.map((item) => {
                if (item.id === data.id) {
                    return {...item, content: nextVal.content, notation: nextVal.notation }
                }
                if (item.id === nextVal?.id) {
                    return {...item, content: inputValue, notation };
                }
                return {...item};
            })
        })
    }
    

    const notationHandler = () => {
        setMainData(prev => {
            return prev.map(item => {
                const newStatus = !item.notation.status;

                return item.id === data.id
                    ? {...item, notation: {
                        ...item.notation,
                        value: !newStatus ? [{id: 1, text: ''}] : item.notation.value, 
                        status: newStatus
                    }}
                    : item
            })
        })
    }

    const initDeleteOption = () => {
        setMainData(prev => {
            return prev.filter(val => val.id !== id)
        })
    }

    const createEvent = ({ event }) => {
        if (isDataReady) {
            return
        }
        enterEvent(event, mainData, initCreatingTodoProcess)
    }

    return { 
        initChangeValue, 
        createEvent, 
        inputValue, 
        actualTitle, 
        mainData, 
        initPrevVal, 
        initNextVal, 
        index, 
        notationHandler, 
        initDeleteOption 
    }
}