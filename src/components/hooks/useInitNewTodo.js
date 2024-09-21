import { useState } from "react";
import { uniqueId } from '../../utils/uniqueId'
import { useTodoContext } from "./useTodoContext";

export const useInitNewTodo = () => {
    const [value, setValue] = useState({title: '', content: ''});
    const { todo, setTodo } = useTodoContext();
    const myId = uniqueId(todo)

    const initNewTodo = () => {

        setTodo(prev => [...prev, {
            id: myId,
            text: [{ id: myId + myId, status: false, text: value.content, order: 1, deleted: false }],
            title: value.title || `Todo collection number ${ myId }`,
            isDone: false,
            order: todo.length ? todo.length + 1 : 1
        }])

        setValue({title: '', content: ''});
    }

    return { value, setValue, initNewTodo, title: value.title, content: value.content }
}