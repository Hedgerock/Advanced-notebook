import { useEffect, useState } from "react";
import { uniqueId } from '../../utils/uniqueId'
import { useTodoContext } from "./useTodoContext";
import { newTodoInterface, valueInterface } from "../../data";

export const useInitNewTodo = () => {
    const { todo, setTodo, contentInputData } = useTodoContext();
    const [value, setValue] = useState(valueInterface);
    const myId = uniqueId(todo)

    useEffect(() => {

        setValue(prev => ({...prev, content: contentInputData}))

    }, [contentInputData])

    const altTitle = `Todo collection number ${ myId }`

    const initNewTodo = () => {
        const newVal = newTodoInterface({
            id: myId,
            textData: value.content,
            title: value.title || altTitle,
            isDone: false,
            orderData: todo,
            deleted: false
        })

        setTodo(prev => [...prev, {...newVal}])
        setValue(valueInterface);
    }

    return { value, setValue, initNewTodo, title: value.title, content: value.content, altTitle }
}