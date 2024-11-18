import { useState } from "react";
import { useTodoItemContext } from "../../hooks";
import { initialNotation, todoFormInterface } from "../../../data";

export const useGetModalsData = () => {
    const [ calcModal, setCalcModal ] = useState(false);
    const { 
        setCreateSubTodoModal, 
        setNewSubtodos,
        isChangable,
        maxId,
        title,
        filteredSubTodos,
        buttonIcons
    } = useTodoItemContext();

    const closeModal = () => {
        setNewSubtodos([todoFormInterface({ id: maxId, content: '', notation: initialNotation })])
        setCreateSubTodoModal(false);
    }

    const closeCalcModal = () => {
        setCalcModal(false);
    }

    const calcHandler = () => {
        if ( !isChangable ) return;
        setCalcModal(prev => !prev)
    }

    const subTodoModalHandler = () => {
        if ( !isChangable ) return;
        setCreateSubTodoModal(prev => !prev)
    }

    const modalData = {
        subTodo: {
            close: closeModal,
            handler: subTodoModalHandler,
            title: `This is a creation modal of the "${ title }" subtodos`
        },
        calculation: {
            close: closeCalcModal,
            handler: calcHandler,
            title: `This is a calculated modal of the "${ title }" subtodos`
        },
    }

    return { modalData, calcModal, filteredSubTodos, buttonIcons }
}