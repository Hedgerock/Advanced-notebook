import { useTodoContext } from "../../hooks";
import { useInitNewChild } from "./useInitNewChild";

export const useGetValue = () => {
    const { contentInputData, buttonIcons } = useTodoContext();
    const { initNewData, actualTitle, actualClassName, initNewTodos } = useInitNewChild();
    const { create } = buttonIcons;

    const buttons = [
        {
            id: 1,
            condition: true,
            disabledStatus: false,
            title: 'Create new todo',
            buttonIcon: create,
            buttonClassName: 'todo-form-box-buttons__current-button',
            buttonFunc: initNewData,
        },
        {
            id: 2,
            condition: contentInputData.length > 1,
            disabledStatus: !contentInputData.every(el => el.isReady),
            title: actualTitle,
            buttonIcon: create,
            buttonClassName: 'todo-form-box-buttons__current-button',
            buttonFunc: initNewTodos
        }
    ]

    return { buttons, actualClassName }
}