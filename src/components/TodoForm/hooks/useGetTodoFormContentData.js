import { useTodoFormContext } from "../../hooks";

export const useGetTodoFormContentData = () => {
    const { mainData, setMainData, isCurrentChild } = useTodoFormContext();

    const isMoreThanOne = mainData.length >= 1;
    const isNotationBoxExists = mainData.some(el => el.notation.status);
    const alternativeClassName = `todo-form-content_alter${ isNotationBoxExists ? "" : "-non-notation" }`;

    const currentClassName = `todo-form-content ${ isMoreThanOne ? alternativeClassName : '' }`

    return { currentClassName, mainData, setMainData, isCurrentChild }
}