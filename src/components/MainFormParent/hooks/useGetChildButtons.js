import { useTodoContext } from "../../hooks";
import { useUpdateData } from "./useUpdateData";

export const useGetChildButtons = ({ data, setData, index }) => {
    const { initNextElement, initPrevElement, initDeleteTodo, prevElement, nextElement, curData, setCurData } = useUpdateData({  data, setData, index });
    const { buttonIcons } = useTodoContext();

    const { up, down, delete: currentValue } = buttonIcons;

    const buttons = [
        {
            id: 1,
            condition: !!prevElement,
            disabledStatus: false,
            title: `Move todo ${ data.title } up`,
            buttonClassName: 'todo-form-container__current-button todo-form-container__current-button_up',
            buttonIcon: up,
            buttonFunc: initPrevElement,
        },
        {
            id: 2,
            condition: true,
            disabledStatus: false,
            title: `Delete todo ${ data.title }`,
            buttonIcon: currentValue,
            buttonClassName: 'todo-form-container__current-button todo-form-container__current-button_delete',
            buttonFunc: initDeleteTodo
        },
        {
            id: 3,
            condition: !!nextElement,
            disabledStatus: false,
            title: `Move todo ${ data.title } down`,
            buttonClassName: 'todo-form-container__current-button todo-form-container__current-button_down',
            buttonIcon: down,
            buttonFunc: initNextElement
        },
    ]

    return { buttons, curData, setCurData }
}