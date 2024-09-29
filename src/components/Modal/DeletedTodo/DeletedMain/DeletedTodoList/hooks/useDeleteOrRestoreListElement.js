import { useDeletedTodosContext } from "../../../../../hooks";
import { useDeletedTodoListItemContext } from "../../../../../hooks/useDeletedTodoListItemContext"

export const useDeleteOrRestoreListElement = () => {
    const { setTodo, data } = useDeletedTodoListItemContext();
    const { data: parent } = useDeletedTodosContext();

    const restoreElementList = () => {
        setTodo(prev => {
            const newArr = prev.map(item => {
                return item.id === parent.id
                    ? {...item, text: item.text.map(el => {
                        return el.id === data.id
                            ? {...el, deleted: false }
                            : {...el}
                    })}
                    : {...item}
            })

            const find = newArr.find(el => el.id === parent.id)
            const isActiveDeletedStatus = find.deleted

            return isActiveDeletedStatus 
            ? newArr.map(item => item.id === parent.id 
                ? {...item, deleted: false} 
                : {...item})
            : newArr
        })
    }

    const deleteElementList = () => {
        setTodo(prev => {
            const newArr = prev.map(item => {
                return item.id === parent.id
                    ? {...item, text: item.text.filter(el => el.id !== data.id)}
                    : {...item}
            })

            const find = newArr.find(el => el.id === parent.id)
            const isRestStilActive = find.text.every(el => !el.deleted)

            const result = isRestStilActive ? newArr.map(item => {
                return item.id === parent.id
                    ? {...item, deleted: false}
                    : {...item}
            })
            : newArr

            return result.filter(item => item.text.length > 0);
        })
    }

    return { restoreElementList, deleteElementList }
}