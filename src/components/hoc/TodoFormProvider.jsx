import { useInitNewTodo } from "../hooks";
import TodoFormP from '../../context/todoFormContext'
import { enterEvent } from "../utils";

export const TodoFormProvider = ({ children }) => {
    const { value, setValue, initNewTodo, title, content } = useInitNewTodo();


    return (
        <TodoFormP value = {{ value, setValue, initNewTodo, title, content, enterEvent }}>
            { children }
        </TodoFormP>
    )
}