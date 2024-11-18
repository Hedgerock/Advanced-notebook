import { useTodoItemChildContext } from "../../../../hooks";

export const useGetFilteredNotations = () => {
    const { notation, setEditNotationHandler, subtodoText, status } = useTodoItemChildContext();

    const filteredNotation = notation.filter(el => el.text);
    const actualText = filteredNotation.length 
        ? `Edit current ${ subtodoText } notations` 
        : `Create notations for ${ subtodoText }`
    
    const switchHandler = () => {
        if (status) return;
        setEditNotationHandler(prev => !prev)
    }

    return { filteredNotation, actualText, switchHandler }
}