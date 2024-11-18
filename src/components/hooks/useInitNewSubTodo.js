import { useTodoContext } from "./useTodoContext";
import { newTodoTextInterface } from "../../data";

export const useInitNewSubTodo = ({ newSubtodos, id }) => {
    const { setTodo, allNotations } = useTodoContext();

    const initNewSubTodo = () => {
        setTodo(prev => {
            return prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: false,
                        text: [
                            ...todo.text,
                            ...newSubtodos.map((el, index) => {
                                const { id: idVal, content } = el
                                return newTodoTextInterface({
                                    id: idVal,
                                    status: false,
                                    text: content,
                                    deleted: false,
                                    order: Math.max.apply(null, todo.text.map(item => item.order)) + 1 + index,
                                    notation: el.notation.value.map(v => {
                                        const newValue = allNotations.find(el => el.title.toLowerCase() === v.text.toLowerCase())
                                        return {...v, isActive: newValue ? newValue.status : false}
                                    }),
                                    count: el.count
                                })
                            })
                        ]
                    };
                }
                return todo;
            });
        });
    };

    return { initNewSubTodo };
};
