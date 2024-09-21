import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useGetSubTodoCopied = () => {
    const { subtodoText, setNotificationData, initNewNotification, title } = useTodoItemChildContext();

    const initCopy = ({ e }) => {

        navigator.clipboard.writeText(e.target.innerText);
                
        setNotificationData(prev => initNewNotification(
            { 
                data: prev, 
                textData: subtodoText, 
                titleData: title, 
                typeData: { element: 'subTodo', action: 'copied' } 
            }
        ))
    }

    return { initCopy }
}