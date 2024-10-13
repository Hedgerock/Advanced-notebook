import { newTodoInterface } from "../../data"
import { uniqueId } from "../../utils/uniqueId";
import { useTodoContext } from "./useTodoContext"

export const useInitNewTodo = () => {
    const { setTodo, todo } = useTodoContext();
    const myId = uniqueId(todo)
    const altTitle = `Todo collection number ${ myId }`

    const initNewTodo = (value) => {
        const newVal = newTodoInterface({
            id: myId,
            textData: value.content,
            title: value.title || altTitle,
            isDone: false,
            orderData: todo,
            deleted: false
        })

        setTodo(prev => [...prev, {...newVal}])
    }

    return { initNewTodo }
}