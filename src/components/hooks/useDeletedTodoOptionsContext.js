import { useContext } from "react"
import { deletedTodoOptionsContext } from "../../context"

export const useDeletedTodoOptionsContext = () => {

    return useContext(deletedTodoOptionsContext);
}