import { useTodoItemChildContext } from "../../../../hooks";

export const useGetFilteredNotations = () => {
    const { notation, setEditNotationHandler, subtodoText } = useTodoItemChildContext();

    const filteredNotation = notation.filter(el => el.text);
    const actualText = filteredNotation.length 
        ? `Edit current ${ subtodoText } notations` 
        : `Create notations for ${ subtodoText }`
    
    const switchHandler = () => {
        setEditNotationHandler(prev => !prev)
    }

    return { filteredNotation, actualText, switchHandler }
}