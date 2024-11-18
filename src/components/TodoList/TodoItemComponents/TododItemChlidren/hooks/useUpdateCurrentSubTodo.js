import { initialNotation, todoFormInterface } from "../../../../../data";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useUpdateCurrentSubTodo = () => {
    const { 
        setChangeStatus, 
        setEditNotationHandler, 
        setNotations,
        notation,
        subtodoText,
        setTodo,
        count,
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
                            ? { ...el, text: myNotations.content, notation: myNotations.notation.value, count: myNotations.count }
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
                },
                count: myNotations.count
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
                    value: notation.length ? notation : initialNotation.value, 
                    status: true 
                },
                count: { status: count?.status ? count.status : false, value: count?.value ? count.value : 1 }
            }
        )])

        setEditNotationHandler(false);
    }

    return { initCloseModal, updateCurrentSubTodo }
}