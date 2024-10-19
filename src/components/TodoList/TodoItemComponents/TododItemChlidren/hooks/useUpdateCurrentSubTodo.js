import { todoFormInterface } from "../../../../../data";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useUpdateCurrentSubTodo = () => {
    const { 
        setChangeStatus, 
        setEditNotationHandler, 
        setNotations,
        notation,
        subtodoText,
        setTodo,
        subtodoId,
        myNotations,
        id

    } = useTodoItemChildContext();

    const updateCurrentSubTodo = () => {

        setTodo(prev => {
            return prev.map(item => {
                return item.id === id
                    ? { ...item, text: item.text.map(el => {
                        return el.id === subtodoId
                            ? { ...el, text: myNotations.content, notation: myNotations.notation.value }
                            : el
                    }) }
                    : item
            })
        })

        setNotations([todoFormInterface(
            { 
                id: subtodoId, 
                content: myNotations.content, 
                notation: { 
                    value: myNotations.notation.value, 
                    status: true 
                } 
            }
        )])

        setEditNotationHandler(false);
        setChangeStatus(false);
    }

    const initCloseModal = () => {

        setNotations([todoFormInterface(
            { 
                id: subtodoId, 
                content: subtodoText, 
                notation: { 
                    value: notation, 
                    status: true 
                } 
            }
        )])

        setEditNotationHandler(false);
    }

    return { initCloseModal, updateCurrentSubTodo }
}