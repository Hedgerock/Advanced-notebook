import { useGetModalsData } from "./useGetModalsData"

export const useGetTodoItemButtons = () => {
    const { modalData, calcModal, filteredSubTodos, buttonIcons } = useGetModalsData();
    const { create, calculate } = buttonIcons

    const buttons = [
        {
            id: 1,
            condition: !!filteredSubTodos.length,
            buttonFunc: modalData.calculation.handler,
            buttonModificator: 'calculate',
            buttonValue: calculate,
            title: 'Calculate current todos',

        },
        {
            id: 2,
            condition: true,
            buttonFunc: modalData.subTodo.handler,
            buttonModificator: 'create',
            buttonValue: create,
            title: 'Create new SubTodo',

        },
    ]

    return { buttons, calcModal, modalData }
}