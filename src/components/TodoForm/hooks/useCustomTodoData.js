import { todoFormInterface } from "../../../data";
import { useTodoFormContext } from "../../hooks";

export const useCustomTodoData = () => {
    const { initNewTodo, title, altTitle, contentInputData, setContentInputData, buttonIcons } = useTodoFormContext();
    const { create } = buttonIcons

    const actualTitle = title || altTitle
    const isMoreThanOneEl = contentInputData.length > 1

    const endOfWord = isMoreThanOneEl ? `s` : '';
    const subTodoPosition = isMoreThanOneEl ? '\n ' : '';

    const subTodoExpansion = contentInputData
    .map((item, index) => {
            const a = isMoreThanOneEl ? `${ index + 1 }. ` : '';
            const b = item.notation.value.some(el => el.text.length > 0) 
                ? `(${item.notation.value.map(el => el.text).join(', ')})` 
                : '' 
            
            const title = ` ${ a }${ item.content } ${ b }`

            return title
        })
    .join('\n ');
    
    //Title Decomposition
    const a = `Create new todo \n`;
    const b = `Title: ${ actualTitle } \n`;
    const c = `Subtodo${ endOfWord }: ${ subTodoPosition }${ subTodoExpansion }`;

    const contentTitle = `${ a } ${ b } ${ c }`


    const initCreatingTodoProcess = () => {
        initNewTodo()
        setContentInputData([todoFormInterface]);
    }

    return { initCreatingTodoProcess, contentTitle, contentInputData, create }
}