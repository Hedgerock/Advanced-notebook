import { useTodoFormContext } from "../../hooks";

export const useCustomTodoData = () => {
    const { initNewTodo, title, altTitle, contentInputData, setContentInputData, buttonIcons } = useTodoFormContext();
    const { create } = buttonIcons

    const actualTitle = title || altTitle
    const isMoreThanOneEl = contentInputData.length > 1

    const endOfWord = isMoreThanOneEl ? `s` : '';
    const subTodoPosition = isMoreThanOneEl ? '\n ' : '';

    const subTodoExpansion = contentInputData
        .map((item, index) => ` ${ isMoreThanOneEl ? `${ index + 1 }. ` : '' }${ item.content }`)
        .join('\n ');

    const contentTitle = `Create new todo \n Title: ${ actualTitle } \n Subtodo${ endOfWord }: ${ subTodoPosition }${ subTodoExpansion }`


    const initCreatingTodoProcess = () => {
        initNewTodo()
        setContentInputData([{ id: 1, content: '' }]);
    }

    return { initCreatingTodoProcess, contentTitle, contentInputData, create }
}