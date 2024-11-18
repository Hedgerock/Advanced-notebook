import { newTodoInterface } from "../../data"
import { useTodoContext } from "./useTodoContext"

export const useInitNewTodo = () => {
    const { setTodo, todo } = useTodoContext();
    const myId = Date.now();
    const altTitle = `Todo collection number ${ myId }`

    const initNewTodo = (value) => {
        const newVal = newTodoInterface({
            id: myId,
            textData: value.content,
            title: value.title || altTitle,
            isDone: false,
            orderData: todo,
            deleted: false,
        })

        setTodo(prev => [...prev, {...newVal}])
    }

    return { initNewTodo }
}