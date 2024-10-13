import { initialNotation, todoFormInterface } from "../../../data";
import { useTodoFormContext } from "../../hooks";

export const useCustomTodoData = () => {
    const { initNewData, title, altTitle, mainData, setMainData, buttonIcons, isDataWithTitle } = useTodoFormContext();
    const { create } = buttonIcons

    const actualTitle = title || altTitle
    const isMoreThanOneEl = mainData.length > 1

    const endOfWord = isMoreThanOneEl ? `s` : '';
    const subTodoPosition = isMoreThanOneEl ? '\n ' : '';

    const subTodoExpansion = mainData
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
    const a = `Create new data \n`;
    const b = `Title: ${ actualTitle } \n`;
    const c = `Subtodo${ endOfWord }: ${ subTodoPosition }${ subTodoExpansion }`;

    const contentTitle = `${ a } ${ isDataWithTitle ? b : '' } ${ c }`


    const initCreatingTodoProcess = () => {
        initNewData();
        const newId = Math.max.apply(null, mainData.map(el => el.id)) + 1;
        setMainData([todoFormInterface({ id: newId, content: '', notation: initialNotation })]);
    }

    return { initCreatingTodoProcess, contentTitle, mainData, create }
}