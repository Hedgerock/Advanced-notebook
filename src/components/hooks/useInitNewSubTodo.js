import { useState } from "react"
import { useTodoContext } from "./useTodoContext";

export const useInitNewSubTodo = () => {
    const [subValue, setSubValue] = useState('');
    const { setTodo } = useTodoContext();

    const initNewSubTodo = ({ curEl }) => {
        setTodo(prev => {
            return prev.map(todo => {
                if (todo.id === curEl.id) {
                    return {
                        ...todo,
                        isDone: false,
                        text: [
                            ...todo.text,
                            {
                                id: todo.text.length ? todo.text[todo.text.length - 1].id + 1 : 1,
                                status: false,
                                text: subValue,
                                deleted: false,
                                order: todo.text.length ? Math.max.apply(null, todo.text.map(item => item.order)) + 1 : 1
                            }
                        ]
                    };
                }
                return todo;
            });
        });
    };

    return { subValue, setSubValue, initNewSubTodo };
};
