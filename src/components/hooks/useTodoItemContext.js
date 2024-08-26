import { useContext } from "react"
import { TodoItemContext } from "../../context/todoItemContext";

export const useTodoItemContext = () => {
    return useContext(TodoItemContext);
}