import { useTodoItemContext } from "../../../hooks";

export const useInitCopyTodo = () => {
    const { 
        title, 
        text, 
        setNotificationData, 
        initNewNotification,
        buttonIcons
    } = useTodoItemContext();

    const { copy } = buttonIcons


    const initCopyTodo = () => {

        const todosChildren = text
            .map((item, ind) => {
                return `${ ind + 1 }. ${ item.text } ${ text[ind + 1] ? ";" : "" }`
            })
            .join('\n ')
        const copiedValue = `${ title }:\n ${ todosChildren }`
        navigator.clipboard.writeText(copiedValue);

        setNotificationData(prev => initNewNotification(
            { 
                data: prev, 
                textData: text, 
                titleData: title, 
                typeData: { element: 'todo', action: 'copied' } 
            }
        ))
    }

    return { initCopyTodo, copy }
}