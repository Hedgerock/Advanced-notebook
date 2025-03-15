import { useTodoContext } from "./useTodoContext"

export const useTerminateOrRestoreAllDeletedTodos = () => {
    const { setTodo } = useTodoContext();

    const terminateAllDeletedTodos = () => {
        setTodo(prev => {
            const newArr = prev.map(item => {

                return {...item, text: item.text.filter(el => {
                    return !el.deleted
                })}
            })

            return newArr.filter(item => item.text.length >= 1)
        })
    }

    const restoreAllDeletedTodos = () => {
        setTodo(prev => {
            return prev.map(item => {
                return {...item, isDone: false, deleted: false, text: item.text.map(el => {
                    return el.deleted
                        ? {...el, deleted: false, status: false}
                        : el
                })}
            })
        })
    }

    return { terminateAllDeletedTodos, restoreAllDeletedTodos }
}