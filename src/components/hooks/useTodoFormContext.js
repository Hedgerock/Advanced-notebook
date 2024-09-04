import { useContext } from "react"
import { todoFormContext } from "../../context"

export const useTodoFormContext = () => {

    return useContext(todoFormContext)
}