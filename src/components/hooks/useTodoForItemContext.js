import { useContext } from "react"
import { todoFormItemContext } from "../../context/todoFormItemContext"

export const useTodoFormItemContext = () => {

    return useContext(todoFormItemContext);
}