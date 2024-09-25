import { useState } from "react";
import { uniqueId } from '../../utils/uniqueId'
import { useTodoContext } from "./useTodoContext";

export const useInitNewTodo = () => {
    const [value, setValue] = useState({title: '', content: []});
    const { todo, setTodo } = useTodoContext();
    const myId = uniqueId(todo)

    const altTitle = `Todo collection number ${ myId }`

    const initNewTodo = () => {

        setTodo(prev => [...prev, {
            id: myId,
            text: value.content.map((el, index) => {
                const newId = myId + myId + index
                return { id: newId, status: false, text: el.content, order: 1 + index, deleted: false }
            }),
            title: value.title || altTitle,
            isDone: false,
            order: todo.length ? todo.length + 1 : 1,
            deleted: false
        }])

        setValue({title: '', content: []});
    }

    return { value, setValue, initNewTodo, title: value.title, content: value.content, altTitle }
}