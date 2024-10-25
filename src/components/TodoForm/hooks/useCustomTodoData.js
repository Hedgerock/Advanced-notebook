import { useEffect } from "react";
import { initialNotation, todoFormInterface } from "../../../data";
import { useTodoContext, useTodoFormContext } from "../../hooks";

export const useCustomTodoData = () => {
    const { 
        initNewData, 
        title, 
        altTitle, 
        mainData, 
        setMainData, 
        buttonIcons, 
        isDataWithTitle, 
        isCleanAfterCreation,
        mainId,
        isNotChildElement
    } = useTodoFormContext();

    const { create } = buttonIcons;
    const { setContentInputData } = useTodoContext();

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

    useEffect(() => {
        if (!isNotChildElement) {
            setContentInputData(prev => {
                return prev.map(el => {
                    return el.id === mainId
                        ? { ...el, currentTodoText: `${ b } ${ c }` }
                        : el
                })
            })
        }
    }, [ isNotChildElement, setContentInputData, mainId, b, c ])


    const initCreatingTodoProcess = () => {
        initNewData();
        const newId = Math.max.apply(null, mainData.map(el => el.id)) + 1;
        
        if (isCleanAfterCreation) {
            setMainData([todoFormInterface({ id: newId, content: '', notation: initialNotation })]);
        }
    }

    return { initCreatingTodoProcess, contentTitle, mainData, create }
}