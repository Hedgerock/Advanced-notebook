import { checkAllstatuses } from "../../utils";
import { changeDeletedStatus, findYourDataById } from "../utils";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useRemoveTodo = () => {
    const { 
        id, 
        subtodoId,
        subtodoText,
        setTodo,
        setNotificationData,
        title,
        initNewNotification
    } = useTodoItemChildContext();

    const initRemove = () => {
        setTodo(prev => {
            const updatedArr = prev.map(item => item.id === id
                ? {...item, text: changeDeletedStatus({ data: item.text, id: subtodoId, boolean: true })}
                : {...item}
            )
    
            const element = findYourDataById({ data: updatedArr, id })
            const allDeleted = checkAllstatuses({ data: element.text, key: 'deleted' });
    
            return allDeleted
                ? changeDeletedStatus({ data: updatedArr, id, boolean: true })
                : updatedArr
        })

        setNotificationData(prev => initNewNotification(
            { 
                data: prev, 
                textData: subtodoText, 
                titleData: title, 
                typeData: { element: 'subTodo', action: 'deleted' } 
            }
        ))
    }

    return { initRemove };
}