import { useContext } from "react"
import { todoItemChildContext } from "../context/todoItemChildContext"

export const useTodoItemChildContext = () => {

    return useContext(todoItemChildContext)
}