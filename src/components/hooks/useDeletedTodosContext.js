import { useContext } from "react"
import { deletedTodosContext } from "../../context"

export const useDeletedTodosContext = () => {

    return useContext(deletedTodosContext)
}